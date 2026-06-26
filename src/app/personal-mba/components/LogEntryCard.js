'use client'
import React from 'react'

const MOOD_ICON = { tired: '😴', neutral: '😐', energised: '⚡' }

export function LogEntryCard({ entry, resources, onDelete }) {
  const linked = resources.filter(r => entry.resourceIds.includes(r.id))
  const dateLabel = new Date(entry.date + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 6, padding: '14px 18px', marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {entry.mood && <span style={{ fontSize: 16 }}>{MOOD_ICON[entry.mood]}</span>}
          <span style={{ color: '#111827', fontSize: 13, fontWeight: 600 }}>{dateLabel}</span>
          <span style={{ color: '#9ca3af', fontSize: 12 }}>{entry.minutesSpent} min</span>
        </div>
        <button onClick={() => { if (confirm('Delete this log entry?')) onDelete(entry.id) }}
          style={{ background: 'none', border: 'none', color: '#d1d5db', cursor: 'pointer', fontSize: 16 }}>×</button>
      </div>

      {entry.keyInsight && (
        <div style={{ color: '#374151', fontSize: 13, lineHeight: 1.5, marginBottom: 8 }}>
          <span style={{ color: '#D4A853', marginRight: 6 }}>💡</span>{entry.keyInsight}
        </div>
      )}

      {linked.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 8 }}>
          {linked.map(r => (
            <span key={r.id} style={{ background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: 4, color: '#374151', fontSize: 11, padding: '2px 8px' }}>
              {r.title}
            </span>
          ))}
        </div>
      )}

      {entry.notes && (
        <details>
          <summary style={{ color: '#9ca3af', fontSize: 11, cursor: 'pointer', userSelect: 'none', letterSpacing: '0.04em' }}>Full notes</summary>
          <div style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.6, marginTop: 6, whiteSpace: 'pre-wrap' }}>{entry.notes}</div>
        </details>
      )}
    </div>
  )
}
