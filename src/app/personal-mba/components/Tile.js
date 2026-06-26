'use client'
import React from 'react'

const MEDIA_COLORS = {
  book:         '#4A6B8A',
  podcast:      '#8A4A3A',
  youtube:      '#4A6B4A',
  'case-study': '#7c5a2e',
  article:      '#6B6B4A',
  course:       '#4A6B6B',
}

const STATUS_STYLE = {
  'not-started': { bg: '#f3f4f6', color: '#6b7280',  label: 'Not Started' },
  'in-progress': { bg: '#f0fdf4', color: '#16a34a',  label: 'In Progress' },
  'completed':   { bg: '#eff6ff', color: '#2563eb',  label: 'Completed'   },
  'paused':      { bg: '#fefce8', color: '#d97706',  label: 'Paused'      },
}

const MEDIA_LABEL = {
  book: 'BOOK', podcast: 'PODCAST', youtube: 'YOUTUBE',
  'case-study': 'CASE STUDY', article: 'ARTICLE', course: 'COURSE',
}

function Stars({ rating }) {
  const r = rating ?? 0
  return (
    <span style={{ color: '#D4A853', fontSize: 11, letterSpacing: 1 }}>
      {Array.from({ length: 5 }, (_, i) => (i < r ? '★' : '☆')).join('')}
    </span>
  )
}

export function Tile({ resource, onClick }) {
  const statusStyle = STATUS_STYLE[resource.status]
  const badgeColor = MEDIA_COLORS[resource.mediaType]

  const tileStyle = {
    width: 200, minWidth: 200, height: 160,
    backgroundColor: resource.isCaseStudy ? '#fffbeb' : '#ffffff',
    border: '1px solid #e5e7eb',
    borderLeft: resource.isCaseStudy ? '3px solid #D4A853' : '1px solid #e5e7eb',
    borderRadius: 6,
    padding: '10px 12px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'border-color 0.15s, box-shadow 0.15s',
    flexShrink: 0,
    overflow: 'hidden',
  }

  return (
    <div
      style={tileStyle}
      onClick={onClick}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#D4A853'
        if (!resource.isCaseStudy) e.currentTarget.style.borderLeft = '1px solid #D4A853'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#e5e7eb'
        e.currentTarget.style.borderLeft = resource.isCaseStudy ? '3px solid #D4A853' : '1px solid #e5e7eb'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
        <span style={{ backgroundColor: badgeColor, color: '#fff', fontSize: 9, fontWeight: 600, letterSpacing: '0.06em', padding: '2px 5px', borderRadius: 3 }}>
          {MEDIA_LABEL[resource.mediaType]}
        </span>
        <span style={{ backgroundColor: statusStyle.bg, color: statusStyle.color, fontSize: 9, fontWeight: 500, padding: '2px 5px', borderRadius: 3 }}>
          {statusStyle.label}
        </span>
      </div>

      <div style={{ flex: 1, margin: '8px 0 4px' }}>
        <div style={{ color: '#111827', fontSize: 12, fontWeight: 600, lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {resource.title}
        </div>
        {resource.author && (
          <div style={{ color: '#6b7280', fontSize: 11, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {resource.author}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stars rating={resource.rating} />
        {resource.dateCompleted && (
          <span style={{ color: '#9ca3af', fontSize: 10 }}>
            {new Date(resource.dateCompleted).toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })}
          </span>
        )}
        {!resource.dateCompleted && resource.progress !== null && resource.progress > 0 && (
          <span style={{ color: '#D4A853', fontSize: 10 }}>{resource.progress}%</span>
        )}
      </div>
    </div>
  )
}

export function GhostTile({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ width: 200, minWidth: 200, height: 160, border: '1.5px dashed #d1d5db', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', flexShrink: 0, transition: 'border-color 0.15s', backgroundColor: 'transparent' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4A853' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#d1d5db' }}
    >
      <span style={{ color: '#D4A853', fontSize: 20, lineHeight: 1 }}>+</span>
      <span style={{ color: '#9ca3af', fontSize: 11 }}>Add case study</span>
    </div>
  )
}
