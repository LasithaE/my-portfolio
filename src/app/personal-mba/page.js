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
      backgroundColor: '#0D0D0D',
      color: '#F0EDE8',
      fontFamily: "'Jost', 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      backgroundImage: 'none',
    }}>
      {/* Page header */}
      <header style={{
        borderBottom: '1px solid #1E1E1E',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Link href="/" style={{ color: '#555', fontSize: 12, textDecoration: 'none', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 6 }}>
            ← lassi.
          </Link>
          <div style={{ width: 1, height: 16, backgroundColor: '#2A2A2A' }} />
          <span style={{ color: '#F0EDE8', fontWeight: 600, fontSize: 14, letterSpacing: '0.04em' }}>Personal MBA</span>
        </div>

        <div style={{ display: 'flex', border: '1px solid #2A2A2A', borderRadius: 4, overflow: 'hidden' }}>
          {['board', 'log'].map((v, i) => (
            <button key={v} onClick={() => setView(v)}
              style={{
                padding: '5px 14px',
                background: view === v ? '#D4A85318' : 'transparent',
                border: 'none',
                borderRight: i === 0 ? '1px solid #2A2A2A' : 'none',
                color: view === v ? '#D4A853' : '#555',
                fontSize: 12, cursor: 'pointer',
                textTransform: 'capitalize',
                fontFamily: 'inherit',
                letterSpacing: '0.04em',
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
          <span style={{ color: '#333', fontSize: 13 }}>Loading…</span>
        </div>
      ) : view === 'board' ? (
        <BoardView resources={resources} onUpdate={upsertResource} onDelete={deleteResource} onAdd={addResource} />
      ) : (
        <LogView logs={logs} resources={resources} onAdd={addLog} onDelete={deleteLog} />
      )}
    </div>
  )
}
