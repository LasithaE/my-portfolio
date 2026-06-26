'use client'
import React from 'react'

const MOOD_ICON = { tired: '😴', neutral: '😐', energised: '⚡' }

export function LogEntryCard({ entry, resources, onDelete }) {
  const linked = resources.filter(r => entry.resourceIds.includes(r.id))
  const dateLabel = new Date(entry.date + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <div style={{ backgroundColor: '#161616', border: '1px solid #2A2A2A', borderRadius: 6, padding: '16px 20px', marginBottom: 12 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {entry.mood && <span style={{ fontSize: 18 }}>{MOOD_ICON[entry.mood]}</span>}
          <span style={{ color: '#F0EDE8', fontSize: 13, fontWeight: 600 }}>{dateLabel}</span>
          <span style={{ color: '#666', fontSize: 12 }}>{entry.minutesSpent} min</span>
        </div>
        <button onClick={() => { if (confirm('Delete this log entry?')) onDelete(entry.id) }}
          style={{ background: 'none', border: 'none', color: '#444', cursor: 'pointer', fontSize: 14 }}>×</button>
      </div>

      {entry.keyInsight && (
        <div style={{ color: '#C0BBB4', fontSize: 13, lineHeight: 1.5, marginBottom: 8 }}>
          <span style={{ color: '#D4A853', marginRight: 6 }}>💡</span>{entry.keyInsight}
        </div>
      )}

      {linked.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
          {linked.map(r => (
            <span key={r.id} style={{ background: '#2A2A2A', border: '1px solid #333', borderRadius: 4, color: '#C0BBB4', fontSize: 11, padding: '2px 8px' }}>
              {r.title}
            </span>
          ))}
        </div>
      )}

      {entry.notes && (
        <details>
          <summary style={{ color: '#555', fontSize: 11, cursor: 'pointer', userSelect: 'none', letterSpacing: '0.04em' }}>Full notes</summary>
          <div style={{ color: '#888', fontSize: 12, lineHeight: 1.6, marginTop: 8, whiteSpace: 'pre-wrap' }}>{entry.notes}</div>
        </details>
      )}
    </div>
  )
}
