import { useState, useEffect } from 'react'

function isIOS() {
  return (
    /iphone|ipad|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  )
}

function isInStandaloneMode() {
  return window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
}

export default function PWAInstallButton({ variant = 'footer' }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showIOS, setShowIOS] = useState(false)
  const [showIOSHint, setShowIOSHint] = useState(false)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    if (isInStandaloneMode()) {
      setInstalled(true)
      return
    }

    if (isIOS()) {
      setShowIOS(true)
      return
    }

    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    window.addEventListener('appinstalled', () => setInstalled(true))

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') setInstalled(true)
    setDeferredPrompt(null)
  }

  if (installed) return null

  // iOS — show button that toggles instructions
  if (showIOS) {
    return (
      <div className={`pwa-install pwa-install--${variant}`}>
        <button
          className="pwa-install__btn"
          onClick={() => setShowIOSHint(h => !h)}
          aria-expanded={showIOSHint}
        >
          <svg className="pwa-install__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 2v10M6 6l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 13v3a1 1 0 001 1h12a1 1 0 001-1v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          Install App
        </button>
        {showIOSHint && (
          <div className="pwa-install__ios-hint" role="status">
            <span className="pwa-install__ios-step">
              Tap <strong>Share</strong> <span aria-hidden="true">⎋</span> then <strong>Add to Home Screen</strong>
            </span>
          </div>
        )}
      </div>
    )
  }

  // Chrome / Android / desktop — show install button only when prompt is ready
  if (!deferredPrompt) return null

  return (
    <div className={`pwa-install pwa-install--${variant}`}>
      <button className="pwa-install__btn" onClick={handleInstall}>
        <svg className="pwa-install__icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 2v10M6 10l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 13v3a1 1 0 001 1h12a1 1 0 001-1v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        Install App
      </button>
    </div>
  )
}
