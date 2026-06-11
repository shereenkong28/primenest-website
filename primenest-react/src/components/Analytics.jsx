import { useEffect } from 'react'
import { initGA4 } from '../analytics'

// Invisible component — renders nothing, initialises GA4 once on mount.
// To activate: paste your Measurement ID into src/analytics/config.js
export default function Analytics() {
  useEffect(() => {
    initGA4()
  }, [])
  return null
}
