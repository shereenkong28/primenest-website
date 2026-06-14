import { useEffect } from 'react'

// Invisible component — renders nothing.
// GA4 is loaded via the static <script> in index.html (G-2BFKYCF30X).
// Custom click events are tracked via window.gtag from analytics/index.js.
export default function Analytics() {

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
