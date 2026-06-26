'use client'
import React from 'react'
import { ROW_DEFS } from '../lib/types'

const WEEK_OPTIONS = [
  { value: 'all', label: 'All Weeks' },
  ...ROW_DEFS.map(r => ({ value: r.id, label: r.id === 'anytime' ? 'Anytime' : `Week ${r.weekNumber}` })),
]
const TYPE_OPTIONS = [
  { value: 'all', label: 'All Types' }, { value: 'book', label: 'Book' },
  { value: 'youtube', label: 'YouTube' }, { value: 'podcast', label: 'Podcast' },
  { value: 'article', label: 'Article' }, { value: 'case-study', label: 'Case Study' },
  { value: 'course', label: 'Course' },
]
const STATUS_OPTIONS = [
  { value: 'all', label: 'All Statuses' }, { value: 'not-started', label: 'Not Started' },
  { value: 'in-progress', label: 'In Progress' }, { value: 'completed', label: 'Completed' },
  { value: 'paused', label: 'Paused' },
]

const sel = {
  background: '#161616', border: '1px solid #2A2A2A', borderRadius: 4,
  color: '#F0EDE8', padding: '6px 28px 6px 10px', fontSize: 12,
  outline: 'none', cursor: 'pointer', appearance: 'none', WebkitAppearance: 'none',
}

export function FilterBar({ filters, setFilter, clearFilter, clearAll, activeCount }) {
  const chips = []
  if (filters.week !== 'all') {
    const opt = WEEK_OPTIONS.find(o => o.value === filters.week)
    if (opt) chips.push({ key: 'week', label: opt.label })
  }
  if (filters.type !== 'all') {
    const opt = TYPE_OPTIONS.find(o => o.value === filters.type)
    if (opt) chips.push({ key: 'type', label: opt.label })
  }
  if (filters.status !== 'all') {
    const opt = STATUS_OPTIONS.find(o => o.value === filters.status)
    if (opt) chips.push({ key: 'status', label: opt.label })
  }

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 40, backgroundColor: '#0D0D0D', borderBottom: '1px solid #1E1E1E', padding: '10px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        {[
          { key: 'week', opts: WEEK_OPTIONS, val: filters.week },
          { key: 'type', opts: TYPE_OPTIONS, val: filters.type },
          { key: 'status', opts: STATUS_OPTIONS, val: filters.status },
        ].map(({ key, opts, val }) => (
          <div key={key} style={{ position: 'relative', display: 'inline-block' }}>
            <select style={sel} value={val} onChange={e => setFilter(key, e.target.value)}>
              {opts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            <span style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: '#666', pointerEvents: 'none', fontSize: 10 }}>▾</span>
          </div>
        ))}

        {chips.map(chip => (
          <button key={chip.key} onClick={() => clearFilter(chip.key)}
            style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#D4A85318', border: '1px solid #D4A853', borderRadius: 4, color: '#D4A853', fontSize: 11, padding: '4px 8px', cursor: 'pointer' }}>
            {chip.label} <span style={{ fontSize: 14, lineHeight: 1 }}>×</span>
          </button>
        ))}

        {activeCount > 1 && (
          <button onClick={clearAll}
            style={{ background: 'none', border: 'none', color: '#555', fontSize: 11, cursor: 'pointer', textDecoration: 'underline', padding: '4px 0' }}>
            Clear all
          </button>
        )}
      </div>
    </div>
  )
}
