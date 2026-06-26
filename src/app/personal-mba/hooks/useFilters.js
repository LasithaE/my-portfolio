'use client'
import { useState, useMemo } from 'react'
import { ROW_DEFS } from '../lib/types'

export function useFilters(resources) {
  const [filters, setFilters] = useState({ week: 'all', type: 'all', status: 'all' })

  const setFilter = (key, value) => setFilters(prev => ({ ...prev, [key]: value }))
  const clearFilter = (key) => setFilters(prev => ({ ...prev, [key]: 'all' }))
  const clearAll = () => setFilters({ week: 'all', type: 'all', status: 'all' })

  const filtered = useMemo(() => {
    return resources.filter(r => {
      if (filters.week !== 'all' && r.row !== filters.week) return false
      if (filters.type !== 'all' && r.mediaType !== filters.type) return false
      if (filters.status !== 'all' && r.status !== filters.status) return false
      return true
    })
  }, [resources, filters])

  const visibleRowIds = useMemo(() => {
    const rowIds = new Set()
    filtered.forEach(r => rowIds.add(r.row))
    const noFilters = filters.week === 'all' && filters.type === 'all' && filters.status === 'all'
    if (noFilters) {
      ROW_DEFS.forEach(rd => { if (rd.expectsCaseStudy) rowIds.add(rd.id) })
    } else if (filters.week !== 'all') {
      const rd = ROW_DEFS.find(r => r.id === filters.week)
      if (rd?.expectsCaseStudy) rowIds.add(filters.week)
    }
    return rowIds
  }, [filtered, filters])

  const activeCount = [filters.week, filters.type, filters.status].filter(v => v !== 'all').length

  return { filters, setFilter, clearFilter, clearAll, filtered, visibleRowIds, activeCount }
}
