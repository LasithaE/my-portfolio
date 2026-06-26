'use client'
import React from 'react'
import { Tile, GhostTile } from './Tile'

export function Row({ rowDef, resources, onTileClick, onAddCaseStudy, showGhost }) {
  const hasCaseStudy = resources.some(r => r.isCaseStudy)
  const showGhostTile = showGhost && rowDef.expectsCaseStudy && !hasCaseStudy

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 32 }}>
      {/* Fixed left header */}
      <div style={{ flexShrink: 0, width: 200, paddingRight: 20, paddingTop: 8 }}>
        <div style={{ color: '#111827', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.2 }}>
          {rowDef.label}
        </div>
        <div style={{ color: '#6b7280', fontSize: 11, marginTop: 3, lineHeight: 1.3 }}>
          {rowDef.sublabel}
        </div>
        <div style={{ marginTop: 5, color: '#d1d5db', fontSize: 10 }}>
          {resources.length} item{resources.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Scrollable tiles */}
      <div style={{ flex: 1, overflowX: 'auto', paddingBottom: 8 }}>
        <div style={{ display: 'flex', gap: 10, width: 'max-content' }}>
          {resources.map(r => (
            <Tile key={r.id} resource={r} onClick={() => onTileClick(r)} />
          ))}
          {showGhostTile && (
            <GhostTile onClick={() => onAddCaseStudy(rowDef.id)} />
          )}
        </div>
      </div>
    </div>
  )
}
