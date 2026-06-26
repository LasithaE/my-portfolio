const RESOURCES_KEY = 'mba-resources'
const LOGS_KEY = 'mba-logs'
export const SEED_VERSION_KEY = 'mba-seeded-v1'

export function loadResources() {
  try {
    const raw = localStorage.getItem(RESOURCES_KEY)
    if (!raw) return []
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function saveResources(resources) {
  try {
    localStorage.setItem(RESOURCES_KEY, JSON.stringify(resources))
  } catch {
    // storage full — fail silently
  }
}

export function loadLogs() {
  try {
    const raw = localStorage.getItem(LOGS_KEY)
    if (!raw) return []
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function saveLogs(logs) {
  try {
    localStorage.setItem(LOGS_KEY, JSON.stringify(logs))
  } catch {
    // storage full — fail silently
  }
}

export function isSeeded() {
  return localStorage.getItem(SEED_VERSION_KEY) === 'done'
}

export function markSeeded() {
  localStorage.setItem(SEED_VERSION_KEY, 'done')
}
