'use client'
import { useState, useEffect, useCallback } from 'react'
import { loadLogs, saveLogs } from '../lib/storage'

export function useLogs() {
  const [logs, setLogs] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setLogs(loadLogs())
    setIsLoaded(true)
  }, [])

  const addLog = useCallback((entry) => {
    setLogs(prev => {
      const next = [entry, ...prev]
      saveLogs(next)
      return next
    })
  }, [])

  const deleteLog = useCallback((id) => {
    setLogs(prev => {
      const next = prev.filter(l => l.id !== id)
      saveLogs(next)
      return next
    })
  }, [])

  return { logs, isLoaded, addLog, deleteLog }
}
