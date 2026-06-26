'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useResources } from './hooks/useResources'
import { useLogs } from './hooks/useLogs'
import { BoardView } from './components/BoardView'
import { LogView } from './components/LogView'
import { StatsStrip } from './components/StatsStrip'

export default function PersonalMBA() {
  const [view, setView] = useState('board')
  const { resources, isLoaded, upsertResource, deleteResource, addResource } = useResources()
  const { logs, isLoaded: logsLoaded, addLog, deleteLog } = useLogs()

  return (
    <div style={{
      minHeight: '100vh',
      color: '#111827',
      fontFamily: "'Jost', -apple-system, BlinkMacSystemFont, sans-serif",
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Page header */}
      <header style={{
        borderBottom: '1px solid #e5e7eb',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 52,
        flexShrink: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(8px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link href="/" style={{ color: '#9ca3af', fontSize: 12, textDecoration: 'none', letterSpacing: '0.04em' }}>
            ← lassi.
          </Link>
          <div style={{ width: 1, height: 14, backgroundColor: '#e5e7eb' }} />
          <span style={{ color: '#111827', fontWeight: 600, fontSize: 14, letterSpacing: '0.03em' }}>Personal MBA</span>
        </div>

        <div style={{ display: 'flex', border: '1px solid #e5e7eb', borderRadius: 6, overflow: 'hidden' }}>
          {['board', 'log'].map((v, i) => (
            <button key={v} onClick={() => setView(v)}
              style={{
                padding: '5px 14px',
                background: view === v ? '#D4A85315' : 'transparent',
                border: 'none',
                borderRight: i === 0 ? '1px solid #e5e7eb' : 'none',
                color: view === v ? '#b8860b' : '#6b7280',
                fontSize: 12, cursor: 'pointer',
                textTransform: 'capitalize',
                fontFamily: 'inherit',
                letterSpacing: '0.04em',
                fontWeight: view === v ? 600 : 400,
              }}>
              {v === 'board' ? 'Board' : 'Log'}
            </button>
          ))}
        </div>
      </header>

      {/* Stats strip */}
      {isLoaded && logsLoaded && <StatsStrip resources={resources} logs={logs} />}

      {/* Content */}
      {!isLoaded ? (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#9ca3af', fontSize: 13 }}>Loading…</span>
        </div>
      ) : view === 'board' ? (
        <BoardView resources={resources} onUpdate={upsertResource} onDelete={deleteResource} onAdd={addResource} />
      ) : (
        <LogView logs={logs} resources={resources} onAdd={addLog} onDelete={deleteLog} />
      )}
    </div>
  )
}
