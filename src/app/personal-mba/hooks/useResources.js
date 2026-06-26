'use client'
import { useState, useEffect, useCallback } from 'react'
import { loadResources, saveResources, isSeeded, markSeeded } from '../lib/storage'
import { buildSeedResources } from '../lib/seed'

export function useResources() {
  const [resources, setResources] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isSeeded()) {
      const seed = buildSeedResources()
      saveResources(seed)
      markSeeded()
      setResources(seed)
    } else {
      setResources(loadResources())
    }
    setIsLoaded(true)
  }, [])

  const upsertResource = useCallback((updated) => {
    setResources(prev => {
      const next = prev.some(r => r.id === updated.id)
        ? prev.map(r => r.id === updated.id ? updated : r)
        : [...prev, updated]
      saveResources(next)
      return next
    })
  }, [])

  const deleteResource = useCallback((id) => {
    setResources(prev => {
      const next = prev.filter(r => r.id !== id)
      saveResources(next)
      return next
    })
  }, [])

  const addResource = useCallback((resource) => {
    setResources(prev => {
      const next = [...prev, resource]
      saveResources(next)
      return next
    })
  }, [])

  return { resources, isLoaded, upsertResource, deleteResource, addResource }
}
