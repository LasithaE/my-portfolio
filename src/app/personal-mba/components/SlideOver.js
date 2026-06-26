'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { ROW_DEFS, FRAMEWORKS } from '../lib/types'

const STATUS_OPTIONS = [
  { value: 'not-started', label: 'Not Started' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'completed',   label: 'Completed'   },
  { value: 'paused',      label: 'Paused'      },
]
const MEDIA_OPTIONS = [
  { value: 'book', label: 'Book' }, { value: 'youtube', label: 'YouTube' },
  { value: 'podcast', label: 'Podcast' }, { value: 'article', label: 'Article' },
  { value: 'case-study', label: 'Case Study' }, { value: 'course', label: 'Course' },
]

function parseMarkdown(text) {
  if (!text.trim()) return ''
  let html = text
  html = html.replace(/^### (.+)$/gm, '<h3 style="color:#111827;font-size:13px;font-weight:600;margin:10px 0 4px">$1</h3>')
  html = html.replace(/^## (.+)$/gm, '<h2 style="color:#111827;font-size:14px;font-weight:600;margin:12px 0 4px">$1</h2>')
  html = html.replace(/^# (.+)$/gm, '<h1 style="color:#111827;font-size:15px;font-weight:600;margin:14px 0 4px">$1</h1>')
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  html = html.replace(/`(.+?)`/g, '<code style="background:#f3f4f6;padding:1px 4px;border-radius:3px;font-size:11px">$1</code>')
  html = html.replace(/^[-*] (.+)$/gm, '<li style="margin:2px 0;padding-left:4px">$1</li>')
  html = html.replace(/(<li[^>]*>[\s\S]*?<\/li>\n?)+/g, m => `<ul style="margin:6px 0;padding-left:16px;list-style:disc">${m}</ul>`)
  html = html.replace(/\n\n/g, '</p><p style="margin:6px 0">')
  html = `<p style="margin:6px 0">${html}</p>`
  html = html.replace(/<p[^>]*>(<h[123][^>]*>)/g, '$1').replace(/(<\/h[123]>)<\/p>/g, '$1')
  html = html.replace(/<p[^>]*>(<ul[^>]*>)/g, '$1').replace(/(<\/ul>)<\/p>/g, '$1')
  return html
}

const inputStyle = {
  background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 5,
  color: '#111827', padding: '6px 10px', fontSize: 13, width: '100%', outline: 'none',
}
const labelStyle = {
  color: '#6b7280', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em',
  textTransform: 'uppercase', marginBottom: 4, display: 'block',
}
const sectionStyle = { borderTop: '1px solid #f3f4f6', paddingTop: 16, marginTop: 16 }

export function SlideOver({ resource, onClose, onUpdate, onDelete }) {
  const [draft, setDraft] = useState(null)
  const [reviewMode, setReviewMode] = useState('edit')
  const debounceRef = useRef(null)

  useEffect(() => {
    if (resource) { setDraft({ ...resource }); setReviewMode('edit') }
  }, [resource?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  const save = useCallback((updated) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      onUpdate({ ...updated, updatedAt: new Date().toISOString() })
    }, 400)
  }, [onUpdate])

  const patch = useCallback((key, value) => {
    if (!draft) return
    const next = { ...draft, [key]: value }
    setDraft(next); save(next)
  }, [draft, save])

  if (!resource || !draft) return null

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', justifyContent: 'flex-end' }}
    >
      <div className="slide-over-panel" style={{ width: 'min(42vw, 600px)', minWidth: 340, height: '100%', backgroundColor: '#ffffff', borderLeft: '1px solid #e5e7eb', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px 12px', borderBottom: '1px solid #f3f4f6', position: 'sticky', top: 0, backgroundColor: '#ffffff', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {draft.isCaseStudy && <span style={{ width: 3, height: 18, backgroundColor: '#D4A853', borderRadius: 2, display: 'inline-block' }} />}
            <span style={{ color: '#9ca3af', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {draft.mediaType.replace('-', ' ')}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={() => { if (confirm('Delete this resource?')) { onDelete(resource.id); onClose() } }}
              style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: 12, padding: '3px 8px' }}>
              Delete
            </button>
            <button onClick={onClose}
              style={{ background: 'none', border: 'none', color: '#374151', cursor: 'pointer', fontSize: 20, lineHeight: 1, padding: '0 4px' }}>
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '18px 22px', flex: 1 }}>

          {/* Title + Author */}
          <div style={{ marginBottom: 14 }}>
            <input value={draft.title} onChange={e => patch('title', e.target.value)} placeholder="Title"
              style={{ ...inputStyle, fontSize: 16, fontWeight: 600, marginBottom: 6, background: '#fff', border: '1px solid #e5e7eb' }} />
            <input value={draft.author} onChange={e => patch('author', e.target.value)} placeholder="Author / Creator"
              style={{ ...inputStyle, color: '#6b7280' }} />
          </div>

          {/* Status */}
          <div style={sectionStyle}>
            <span style={labelStyle}>Status</span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {STATUS_OPTIONS.map(opt => (
                <button key={opt.value} onClick={() => patch('status', opt.value)}
                  style={{ padding: '4px 12px', borderRadius: 5, border: draft.status === opt.value ? '1px solid #D4A853' : '1px solid #e5e7eb', background: draft.status === opt.value ? '#fffbeb' : '#f9fafb', color: draft.status === opt.value ? '#b8860b' : '#6b7280', fontSize: 12, cursor: 'pointer' }}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rating */}
          <div style={sectionStyle}>
            <span style={labelStyle}>Rating</span>
            <div style={{ display: 'flex', gap: 4 }}>
              {[1,2,3,4,5].map(n => (
                <button key={n} onClick={() => patch('rating', draft.rating === n ? null : n)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: (draft.rating ?? 0) >= n ? '#D4A853' : '#e5e7eb', padding: '0 2px', lineHeight: 1 }}>
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div style={sectionStyle}>
            <span style={labelStyle}>Progress — {draft.progress ?? 0}%</span>
            <input type="range" min={0} max={100} value={draft.progress ?? 0}
              onChange={e => patch('progress', parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#D4A853', cursor: 'pointer' }} />
          </div>

          {/* Dates */}
          <div style={sectionStyle}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <span style={labelStyle}>Date Started</span>
                <input type="date" value={draft.dateStarted ?? ''} onChange={e => patch('dateStarted', e.target.value || null)} style={inputStyle} />
              </div>
              <div>
                <span style={labelStyle}>Date Completed</span>
                <input type="date" value={draft.dateCompleted ?? ''} onChange={e => patch('dateCompleted', e.target.value || null)} style={inputStyle} />
              </div>
            </div>
          </div>

          {/* Week */}
          <div style={sectionStyle}>
            <span style={labelStyle}>Week / Row</span>
            <select value={draft.row} onChange={e => {
              const rd = ROW_DEFS.find(r => r.id === e.target.value)
              const next = { ...draft, row: e.target.value, weekNumber: rd?.weekNumber ?? null, expectsCaseStudy: rd?.expectsCaseStudy ?? false }
              setDraft(next); save(next)
            }} style={{ ...inputStyle, cursor: 'pointer' }}>
              {ROW_DEFS.map(rd => <option key={rd.id} value={rd.id}>{rd.label} — {rd.sublabel}</option>)}
            </select>
          </div>

          {/* Media type */}
          <div style={sectionStyle}>
            <span style={labelStyle}>Media Type</span>
            <select value={draft.mediaType} onChange={e => patch('mediaType', e.target.value)} style={{ ...inputStyle, cursor: 'pointer' }}>
              {MEDIA_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
            </select>
          </div>

          {/* URL */}
          <div style={sectionStyle}>
            <span style={labelStyle}>URL</span>
            <input type="url" value={draft.url ?? ''} onChange={e => patch('url', e.target.value || null)} placeholder="https://..." style={inputStyle} />
          </div>

          {/* Review */}
          <div style={sectionStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={labelStyle}>Review</span>
              <div style={{ display: 'flex', gap: 5 }}>
                {['edit', 'preview'].map(mode => (
                  <button key={mode} onClick={() => setReviewMode(mode)}
                    style={{ fontSize: 11, padding: '3px 8px', borderRadius: 4, border: reviewMode === mode ? '1px solid #D4A853' : '1px solid #e5e7eb', background: reviewMode === mode ? '#fffbeb' : '#f9fafb', color: reviewMode === mode ? '#b8860b' : '#6b7280', cursor: 'pointer', textTransform: 'capitalize' }}>
                    {mode}
                  </button>
                ))}
              </div>
            </div>
            {reviewMode === 'edit' ? (
              <textarea value={draft.review} onChange={e => patch('review', e.target.value)}
                placeholder="Write your review in markdown..." rows={7}
                style={{ ...inputStyle, resize: 'vertical', fontFamily: 'monospace', fontSize: 12, lineHeight: 1.6 }} />
            ) : (
              <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 5, padding: '10px 12px', minHeight: 100, color: '#374151', fontSize: 13, lineHeight: 1.7 }}
                dangerouslySetInnerHTML={{ __html: parseMarkdown(draft.review) || '<span style="color:#d1d5db">Nothing to preview</span>' }} />
            )}
          </div>

          {/* Takeaways */}
          <div style={sectionStyle}>
            <span style={labelStyle}>Key Takeaways</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {draft.takeaways.map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span style={{ color: '#D4A853', fontSize: 12, flexShrink: 0 }}>•</span>
                  <input value={t} onChange={e => patch('takeaways', draft.takeaways.map((x, j) => j === i ? e.target.value : x))}
                    style={{ ...inputStyle, flex: 1 }} placeholder={`Takeaway ${i + 1}`} />
                  <button onClick={() => patch('takeaways', draft.takeaways.filter((_, j) => j !== i))}
                    style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: 16, lineHeight: 1, padding: '0 4px', flexShrink: 0 }}>×</button>
                </div>
              ))}
              <button onClick={() => patch('takeaways', [...draft.takeaways, ''])}
                style={{ background: 'none', border: '1px dashed #d1d5db', borderRadius: 5, color: '#9ca3af', cursor: 'pointer', fontSize: 12, padding: '5px 12px', marginTop: 4, textAlign: 'left' }}>
                + Add takeaway
              </button>
            </div>
          </div>

          {/* Frameworks */}
          <div style={sectionStyle}>
            <span style={labelStyle}>Frameworks Applied</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {FRAMEWORKS.map(fw => {
                const active = draft.frameworks.includes(fw)
                return (
                  <button key={fw}
                    onClick={() => patch('frameworks', active ? draft.frameworks.filter(f => f !== fw) : [...draft.frameworks, fw])}
                    style={{ padding: '3px 9px', borderRadius: 4, border: active ? '1px solid #D4A853' : '1px solid #e5e7eb', background: active ? '#D4A853' : '#f9fafb', color: active ? '#fff' : '#6b7280', fontSize: 11, cursor: 'pointer', fontWeight: active ? 600 : 400, transition: 'all 0.1s' }}>
                    {fw}
                  </button>
                )
              })}
            </div>
          </div>

          <div style={{ height: 32 }} />
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .slide-over-panel { width: 100vw !important; min-width: 0 !important; } }`}</style>
    </div>
  )
}
