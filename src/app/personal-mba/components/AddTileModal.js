'use client'
import React, { useState, useEffect } from 'react'
import { ROW_DEFS } from '../lib/types'

function mkId() { return Math.random().toString(36).substring(2,9) + Math.random().toString(36).substring(2,9) }

const MEDIA_OPTIONS = [
  { value: 'book', label: 'Book' }, { value: 'youtube', label: 'YouTube' },
  { value: 'podcast', label: 'Podcast' }, { value: 'article', label: 'Article' },
  { value: 'case-study', label: 'Case Study' }, { value: 'course', label: 'Course' },
]

const inp = { background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 5, color: '#111827', padding: '7px 10px', fontSize: 13, width: '100%', outline: 'none' }
const lbl = { color: '#6b7280', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 5 }

export function AddTileModal({ defaultRow = 'week-1', onClose, onAdd }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [mediaType, setMediaType] = useState('book')
  const [row, setRow] = useState(defaultRow)
  const [url, setUrl] = useState('')

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSubmit = e => {
    e.preventDefault()
    if (!title.trim()) return
    const rd = ROW_DEFS.find(r => r.id === row)
    const now = new Date().toISOString()
    onAdd({
      id: mkId(), title: title.trim(), author: author.trim(), mediaType,
      subject: rd ? [rd.sublabel] : [], row, weekNumber: rd?.weekNumber ?? null,
      isCaseStudy: mediaType === 'case-study', expectsCaseStudy: rd?.expectsCaseStudy ?? false,
      status: 'not-started', progress: null, rating: null,
      dateStarted: null, dateCompleted: null,
      review: '', takeaways: [], frameworks: [],
      url: url.trim() || null, createdAt: now, updatedAt: now,
    })
    onClose()
  }

  return (
    <div onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{ position: 'fixed', inset: 0, zIndex: 200, backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 10, width: '100%', maxWidth: 420 }}>
        <form onSubmit={handleSubmit}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#111827', fontWeight: 600, fontSize: 15 }}>Add Resource</span>
            <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: 20 }}>×</button>
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <label style={lbl}>Title *</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required autoFocus style={inp} />
            </div>
            <div>
              <label style={lbl}>Author / Creator</label>
              <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author or creator" style={inp} />
            </div>
            <div>
              <label style={lbl}>Media Type</label>
              <select value={mediaType} onChange={e => setMediaType(e.target.value)} style={{ ...inp, cursor: 'pointer' }}>
                {MEDIA_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div>
              <label style={lbl}>Week / Row</label>
              <select value={row} onChange={e => setRow(e.target.value)} style={{ ...inp, cursor: 'pointer' }}>
                {ROW_DEFS.map(rd => <option key={rd.id} value={rd.id}>{rd.label} — {rd.sublabel}</option>)}
              </select>
            </div>
            <div>
              <label style={lbl}>URL (optional)</label>
              <input type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://..." style={inp} />
            </div>
          </div>
          <div style={{ padding: '12px 20px', borderTop: '1px solid #f3f4f6', display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <button type="button" onClick={onClose}
              style={{ padding: '7px 14px', borderRadius: 5, border: '1px solid #e5e7eb', background: 'none', color: '#6b7280', fontSize: 13, cursor: 'pointer' }}>
              Cancel
            </button>
            <button type="submit"
              style={{ padding: '7px 14px', borderRadius: 5, background: '#111827', color: '#fff', border: 'none', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
