'use client'
import React, { useState } from 'react'
import { LogEntryCard } from './LogEntryCard'
import { AddLogModal } from './AddLogModal'

export function LogView({ logs, resources, onAdd, onDelete }) {
  const [showModal, setShowModal] = useState(false)
  const sorted = [...logs].sort((a,b) => b.date.localeCompare(a.date))

  return (
    <div style={{ padding: '24px 32px', maxWidth: 680 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <h2 style={{ color: '#111827', fontSize: 16, fontWeight: 700, margin: 0 }}>Daily Log</h2>
          <div style={{ color: '#9ca3af', fontSize: 12, marginTop: 2 }}>{logs.length} entries</div>
        </div>
        <button onClick={() => setShowModal(true)}
          style={{ padding: '7px 14px', borderRadius: 6, border: '1px solid #D4A853', background: '#fffbeb', color: '#b8860b', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
          + Log today
        </button>
      </div>

      {sorted.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#9ca3af' }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>📖</div>
          <div style={{ fontSize: 14 }}>No log entries yet.</div>
          <div style={{ fontSize: 12, marginTop: 6 }}>Click &quot;Log today&quot; to record your first study session.</div>
        </div>
      ) : sorted.map(entry => (
        <LogEntryCard key={entry.id} entry={entry} resources={resources} onDelete={onDelete} />
      ))}

      {showModal && <AddLogModal resources={resources} onClose={() => setShowModal(false)} onAdd={entry => { onAdd(entry); setShowModal(false) }} />}
    </div>
  )
}
