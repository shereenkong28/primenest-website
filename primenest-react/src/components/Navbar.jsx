import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang, T } from '../contexts/LangContext'

const WA_NUMBER = '601172287202'
const WA_MSG_ZH = encodeURIComponent('您好，我想了解以下产品报价：\n\n产品：\n采购数量：\n目的国家：')
const WA_MSG_EN = encodeURIComponent('Hello, I would like to enquire about wholesale pricing:\n\nProduct:\nOrder Quantity:\nDestination Country:')

const links = [
  { href: '#wholesale-pricing',  en: 'Wholesale Pricing', zh: '批发价格' },
  { href: '#transparency',       en: 'Our Stock',         zh: '货源' },
  { href: '#compliance',         en: 'Compliance',        zh: '合规认证' },
  { href: '#about',              en: 'About Us',          zh: '关于我们' },
  { href: '#contact',            en: 'Export Inquiry',    zh: '出口询盘' },
]

export default function Navbar() {
  const { lang, setLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const waUrl = `https://wa.me/${WA_NUMBER}?text=${lang === 'zh' ? WA_MSG_ZH : WA_MSG_EN}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <motion.header
      className={`nav2 ${scrolled ? 'nav2--scrolled' : ''}`}
      id="nav"
    >
      <div className="nav2__inner">

        {/* ── LOGO ── */}
        <a href="#top" className="nav2__brand" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="PrimeNest Global" className="nav2__logo-img" />
        </a>

        {/* ── DESKTOP LINKS ── */}
        <nav className="nav2__links" aria-label="Main navigation">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav2__link">
              <span className="lang-en">{l.en}</span>
              <span className="lang-zh">{l.zh}</span>
            </a>
          ))}
        </nav>

        {/* ── RIGHT ACTIONS ── */}
        <div className="nav2__right">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            <button className={lang === 'zh' ? 'active' : ''} onClick={() => setLang('zh')}>中文</button>
          </div>

          <motion.a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav2__quote-btn"
            whileTap={{ scale: 0.95 }}
          >
            <T en="Get Quote" zh="获取报价" />
          </motion.a>

          {/* Hamburger — mobile only */}
          <button
            className={`nav2__burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav2__mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav2__mobile-link" onClick={() => setMenuOpen(false)}>
                <span className="lang-en">{l.en}</span>
                <span className="lang-zh">{l.zh}</span>
              </a>
            ))}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav2__mobile-quote"
              onClick={() => setMenuOpen(false)}
            >
              <T en="Get Quote" zh="获取报价" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
