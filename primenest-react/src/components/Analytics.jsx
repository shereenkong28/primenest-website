import { useEffect } from 'react'
import { initGA4 } from '../analytics'

// Invisible component — renders nothing, initialises GA4 once on mount.
export default function Analytics() {
  useEffect(() => {
    initGA4()
  }, [])

  // Suppress right-click context menu on all images and videos globally.
  // Covers every component without needing per-element handlers.
  useEffect(() => {
    function blockContextMenu(e) {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault()
      }
    }
    function blockDragStart(e) {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault()
      }
    }
    document.addEventListener('contextmenu', blockContextMenu)
    document.addEventListener('dragstart', blockDragStart)
    return () => {
      document.removeEventListener('contextmenu', blockContextMenu)
      document.removeEventListener('dragstart', blockDragStart)
    }
  }, [])

  return null
}
