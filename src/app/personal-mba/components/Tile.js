'use client'
import React from 'react'

const MEDIA_COLORS = {
  book:         '#4A6B8A',
  podcast:      '#8A4A3A',
  youtube:      '#4A6B4A',
  'case-study': '#6B4A8A',
  article:      '#6B6B4A',
  course:       '#4A6B6B',
}

const STATUS_STYLE = {
  'not-started': { bg: '#2A2A2A', color: '#555555', label: 'Not Started' },
  'in-progress': { bg: '#1A2A1A', color: '#4A8A4A', label: 'In Progress' },
  'completed':   { bg: '#1A2A2A', color: '#4A8A8A', label: 'Completed'   },
  'paused':      { bg: '#2A2A1A', color: '#8A8A4A', label: 'Paused'      },
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
  const badgeColor = resource.isCaseStudy ? '#D4A853' : MEDIA_COLORS[resource.mediaType]

  const tileStyle = {
    width: 200, minWidth: 200, height: 160,
    backgroundColor: resource.isCaseStudy ? '#D4A85308' : '#161616',
    border: '1px solid #2A2A2A',
    borderLeft: resource.isCaseStudy ? '3px solid #D4A853' : '1px solid #2A2A2A',
    borderRadius: 6,
    padding: '10px 12px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'border-color 0.15s',
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
        e.currentTarget.style.borderColor = '#2A2A2A'
        e.currentTarget.style.borderLeft = resource.isCaseStudy ? '3px solid #D4A853' : '1px solid #2A2A2A'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
        <span style={{ backgroundColor: badgeColor, color: '#F0EDE8', fontSize: 9, fontWeight: 600, letterSpacing: '0.06em', padding: '2px 5px', borderRadius: 3 }}>
          {MEDIA_LABEL[resource.mediaType]}
        </span>
        <span style={{ backgroundColor: statusStyle.bg, color: statusStyle.color, fontSize: 9, fontWeight: 500, padding: '2px 5px', borderRadius: 3 }}>
          {statusStyle.label}
        </span>
      </div>

      <div style={{ flex: 1, margin: '8px 0 4px' }}>
        <div style={{ color: '#F0EDE8', fontSize: 12, fontWeight: 600, lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {resource.title}
        </div>
        {resource.author && (
          <div style={{ color: '#666666', fontSize: 11, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {resource.author}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stars rating={resource.rating} />
        {resource.dateCompleted && (
          <span style={{ color: '#666666', fontSize: 10 }}>
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
      style={{ width: 200, minWidth: 200, height: 160, border: '1.5px dashed #2A2A2A', borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', flexShrink: 0, transition: 'border-color 0.15s' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4A853' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A' }}
    >
      <span style={{ color: '#D4A853', fontSize: 20, lineHeight: 1 }}>+</span>
      <span style={{ color: '#555555', fontSize: 11 }}>Add case study</span>
    </div>
  )
}
