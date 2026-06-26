'use client'
import React, { useState } from 'react'
import { ROW_DEFS } from '../lib/types'
import { Row } from './Row'
import { SlideOver } from './SlideOver'
import { AddTileModal } from './AddTileModal'
import { useFilters } from '../hooks/useFilters'
import { FilterBar } from './FilterBar'

export function BoardView({ resources, onUpdate, onDelete, onAdd }) {
  const [selected, setSelected] = useState(null)
  const [addRow, setAddRow] = useState(null)
  const { filters, setFilter, clearFilter, clearAll, filtered, visibleRowIds, activeCount } = useFilters(resources)
  const noFilters = filters.week === 'all' && filters.type === 'all' && filters.status === 'all'

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
      <FilterBar filters={filters} setFilter={setFilter} clearFilter={clearFilter} clearAll={clearAll} activeCount={activeCount} />

      <div style={{ padding: '28px 32px', flex: 1, overflowY: 'auto' }}>
        {ROW_DEFS.filter(rd => visibleRowIds.has(rd.id)).map(rd => {
          const rowResources = filtered.filter(r => r.row === rd.id)
          if (rowResources.length === 0 && !rd.expectsCaseStudy) return null
          if (rowResources.length === 0 && !noFilters) return null
          return (
            <Row key={rd.id} rowDef={rd} resources={rowResources}
              onTileClick={r => setSelected(r)}
              onAddCaseStudy={rowId => setAddRow(rowId)}
              showGhost={noFilters}
            />
          )
        })}
      </div>

      <SlideOver resource={selected} onClose={() => setSelected(null)}
        onUpdate={r => { onUpdate(r); setSelected(r) }}
        onDelete={id => { onDelete(id); setSelected(null) }}
      />

      {addRow && (
        <AddTileModal defaultRow={addRow} onClose={() => setAddRow(null)}
          onAdd={r => { onAdd(r); setAddRow(null) }} />
      )}
    </div>
  )
}
