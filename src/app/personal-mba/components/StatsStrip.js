'use client'
import React, { useState, useMemo } from 'react'

function calcStreak(logs) {
  if (!logs.length) return 0
  const dates = new Set(logs.map(l => l.date))
  const today = new Date(); today.setHours(0,0,0,0)
  const fmt = d => d.toISOString().split('T')[0]
  let streak = 0; const cur = new Date(today)
  if (!dates.has(fmt(cur))) cur.setDate(cur.getDate() - 1)
  while (dates.has(fmt(cur))) { streak++; cur.setDate(cur.getDate() - 1) }
  return streak
}

function hoursThisWeek(logs) {
  const now = new Date()
  const monday = new Date(now); monday.setHours(0,0,0,0)
  monday.setDate(now.getDate() - ((now.getDay() + 6) % 7))
  const mondayStr = monday.toISOString().split('T')[0]
  const mins = logs.filter(l => l.date >= mondayStr).reduce((a, l) => a + (l.minutesSpent || 0), 0)
  return Math.round((mins / 60) * 10) / 10
}

export function StatsStrip({ resources, logs }) {
  const [expanded, setExpanded] = useState(false)
  const completed  = useMemo(() => resources.filter(r => r.status === 'completed').length, [resources])
  const inProgress = useMemo(() => resources.filter(r => r.status === 'in-progress').length, [resources])
  const notStarted = useMemo(() => resources.filter(r => r.status === 'not-started').length, [resources])
  const streak     = useMemo(() => calcStreak(logs), [logs])
  const weekHours  = useMemo(() => hoursThisWeek(logs), [logs])

  const lastCompleted = useMemo(() =>
    resources.filter(r => r.status === 'completed' && r.dateCompleted)
      .sort((a,b) => b.dateCompleted.localeCompare(a.dateCompleted)).at(0)
  , [resources])

  const subjectCounts = useMemo(() => {
    const counts = {}
    resources.filter(r => r.status === 'completed').forEach(r => {
      r.subject.forEach(s => { counts[s] = (counts[s] ?? 0) + 1 })
    })
    return Object.entries(counts).sort((a,b) => b[1]-a[1]).slice(0,6)
  }, [resources])
  const maxSubject = subjectCounts[0]?.[1] ?? 1

  const Stat = ({ value, label, color }) => (
    <span style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
      <span style={{ color, fontSize: 14, fontWeight: 700 }}>{value}</span>
      <span style={{ color: '#9ca3af', fontSize: 12 }}>{label}</span>
    </span>
  )

  return (
    <div style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: 'rgba(255,255,255,0.7)' }}>
      <button onClick={() => setExpanded(e => !e)}
        style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '8px 32px', background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}>
        <Stat value={completed}  label="completed"   color="#2563eb" />
        <Stat value={inProgress} label="in progress" color="#16a34a" />
        <Stat value={notStarted} label="not started" color="#9ca3af" />
        {streak > 0 && <span style={{ color: '#b8860b', fontSize: 13 }}>🔥 {streak} day streak</span>}
        <span style={{ marginLeft: 'auto', color: '#d1d5db', fontSize: 10, transform: expanded ? 'rotate(180deg)' : 'none', display: 'inline-block', transition: 'transform 0.2s' }}>▾</span>
      </button>

      {expanded && (
        <div style={{ padding: '0 32px 16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          <div>
            <div style={{ color: '#6b7280', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>By Subject</div>
            {subjectCounts.length === 0
              ? <div style={{ color: '#d1d5db', fontSize: 12 }}>No completions yet</div>
              : subjectCounts.map(([subject, count]) => (
                  <div key={subject} style={{ marginBottom: 6 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                      <span style={{ color: '#374151', fontSize: 11 }}>{subject}</span>
                      <span style={{ color: '#9ca3af', fontSize: 11 }}>{count}</span>
                    </div>
                    <div style={{ height: 3, backgroundColor: '#f3f4f6', borderRadius: 2 }}>
                      <div style={{ height: '100%', width: `${(count/maxSubject)*100}%`, backgroundColor: '#D4A853', borderRadius: 2 }} />
                    </div>
                  </div>
                ))}
          </div>
          <div>
            <div style={{ color: '#6b7280', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>This Week</div>
            <div style={{ color: '#111827', fontSize: 24, fontWeight: 700 }}>{weekHours}h</div>
            <div style={{ color: '#9ca3af', fontSize: 12 }}>logged</div>
          </div>
          {lastCompleted && (
            <div>
              <div style={{ color: '#6b7280', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>Last Completed</div>
              <div style={{ color: '#111827', fontSize: 13, fontWeight: 600 }}>{lastCompleted.title}</div>
              {lastCompleted.author && <div style={{ color: '#6b7280', fontSize: 12 }}>{lastCompleted.author}</div>}
              {lastCompleted.dateCompleted && (
                <div style={{ color: '#D4A853', fontSize: 11, marginTop: 4 }}>
                  {new Date(lastCompleted.dateCompleted).toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
