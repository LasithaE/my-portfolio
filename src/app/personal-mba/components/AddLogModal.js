'use client'
import React, { useState, useEffect } from 'react'

function mkId() { return Math.random().toString(36).substring(2,9) + Math.random().toString(36).substring(2,9) }
const todayStr = () => new Date().toISOString().split('T')[0]

const MOODS = [
  { value: 'tired', label: '😴 Tired' },
  { value: 'neutral', label: '😐 Neutral' },
  { value: 'energised', label: '⚡ Energised' },
]

const inp = { background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 5, color: '#111827', padding: '7px 10px', fontSize: 13, width: '100%', outline: 'none' }
const lbl = { color: '#6b7280', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 5 }

export function AddLogModal({ resources, onClose, onAdd }) {
  const [date, setDate] = useState(todayStr())
  const [minutes, setMinutes] = useState(30)
  const [selectedIds, setSelectedIds] = useState([])
  const [keyInsight, setKeyInsight] = useState('')
  const [notes, setNotes] = useState('')
  const [mood, setMood] = useState(null)

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const toggle = id => setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])

  const handleSubmit = e => {
    e.preventDefault()
    onAdd({ id: mkId(), date, resourceIds: selectedIds, minutesSpent: minutes, keyInsight, notes, mood, createdAt: new Date().toISOString() })
    onClose()
  }

  return (
    <div onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 10, width: '100%', maxWidth: 520, maxHeight: '90vh', overflowY: 'auto' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ padding: '18px 22px', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#111827', fontWeight: 600, fontSize: 15 }}>Log Today</span>
            <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: 20 }}>×</button>
          </div>

          <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={lbl}>Date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} style={inp} required />
            </div>
            <div>
              <label style={lbl}>Minutes Spent — {minutes}</label>
              <input type="range" min={5} max={240} step={5} value={minutes} onChange={e => setMinutes(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: '#D4A853' }} />
            </div>
            <div>
              <label style={lbl}>Resources</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, maxHeight: 110, overflowY: 'auto' }}>
                {resources.map(r => {
                  const sel = selectedIds.includes(r.id)
                  return (
                    <button key={r.id} type="button" onClick={() => toggle(r.id)}
                      style={{ padding: '3px 9px', borderRadius: 4, border: sel ? '1px solid #D4A853' : '1px solid #e5e7eb', background: sel ? '#fffbeb' : '#f9fafb', color: sel ? '#b8860b' : '#6b7280', fontSize: 11, cursor: 'pointer' }}>
                      {r.title}
                    </button>
                  )
                })}
              </div>
            </div>
            <div>
              <label style={lbl}>Key Insight</label>
              <input type="text" value={keyInsight} onChange={e => setKeyInsight(e.target.value)}
                placeholder="What was your biggest takeaway today?" style={inp} />
            </div>
            <div>
              <label style={lbl}>Notes</label>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Additional notes..." rows={4}
                style={{ ...inp, resize: 'vertical', lineHeight: 1.5 }} />
            </div>
            <div>
              <label style={lbl}>Mood</label>
              <div style={{ display: 'flex', gap: 8 }}>
                {MOODS.map(m => (
                  <button key={m.value} type="button" onClick={() => setMood(mood === m.value ? null : m.value)}
                    style={{ flex: 1, padding: 8, borderRadius: 5, border: mood === m.value ? '1px solid #D4A853' : '1px solid #e5e7eb', background: mood === m.value ? '#fffbeb' : '#f9fafb', color: mood === m.value ? '#b8860b' : '#6b7280', fontSize: 12, cursor: 'pointer' }}>
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div style={{ padding: '12px 22px', borderTop: '1px solid #f3f4f6', display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            <button type="button" onClick={onClose}
              style={{ padding: '7px 14px', borderRadius: 5, border: '1px solid #e5e7eb', background: 'none', color: '#6b7280', fontSize: 13, cursor: 'pointer' }}>
              Cancel
            </button>
            <button type="submit"
              style={{ padding: '7px 14px', borderRadius: 5, border: '1px solid #D4A853', background: '#D4A853', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              Save Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
