// Where a visit started, kept for the tab's session so an inquiry can say which page and source it came from.
const KEY = 'diniz:landing'

export type Landing = { page: string; referrer: string }

/** Keeps the first page of the visit and the site that sent it. Later pages in the same tab leave it alone. */
export function recordLanding() {
  try {
    if (sessionStorage.getItem(KEY)) return
    const landing: Landing = {
      page: window.location.pathname + window.location.search,
      referrer: document.referrer || '(direct)',
    }
    sessionStorage.setItem(KEY, JSON.stringify(landing))
  } catch {
    // Storage blocked (private mode, strict settings): the inquiry still sends, without its source.
  }
}

export function readLanding(): Landing {
  try {
    const stored = sessionStorage.getItem(KEY)
    if (stored) return JSON.parse(stored) as Landing
  } catch {}
  return { page: '(unknown)', referrer: document.referrer || '(direct)' }
}
