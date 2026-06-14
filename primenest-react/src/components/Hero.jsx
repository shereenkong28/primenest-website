import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { T, useLang } from '../contexts/LangContext'
import { events } from '../analytics'

const ease = [0.22, 1, 0.36, 1]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const charContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.3 } },
}
const charItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.08, ease: 'easeOut' } },
}
const glowIn = {
  hidden: { opacity: 0, filter: 'blur(10px)', y: 8 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.9, delay: 1.5, ease } },
}

function TypewriterLine({ text }) {
  return (
    <motion.span variants={charContainer} initial="hidden" animate="visible" aria-label={text} style={{ display: 'block' }}>
      {text.split('').map((char, i) => (
        <motion.span key={i} variants={charItem} style={{ display: char === ' ' ? 'inline' : 'inline-block' }}>
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { lang } = useLang()

  const { scrollY } = useScroll()
  const videoScale = useTransform(scrollY, [0, 600], [1, 1])
  const contentY = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : -40])
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0.6])

  return (
    <section className="hero2" id="top" ref={sectionRef}>

      {/* ── FULL-BLEED VIDEO ── */}
      <motion.div className="hero2__media" style={{ scale: videoScale }}>
        {/* Desktop 16:9 — hidden on mobile */}
        <video
          className="hero2__video hero2__video--desktop hero-video"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
          preload="auto"
          onContextMenu={(e) => e.preventDefault()}
        />
        {/* Mobile 9:16 portrait — hidden on desktop */}
        <video
          className="hero2__video hero2__video--mobile hero-video"
          src="/hero-mobile.mp4"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
          preload="none"
          onContextMenu={(e) => e.preventDefault()}
        />
      </motion.div>

      {/* Overlays */}
      <div className="hero2__overlay" />
      <div className="hero2__vignette" />

      {/* ── CONTENT ── */}
      <div className="hero2__inner hero2__inner--full">
        <motion.div
          className="hero2__content"
          style={{ y: contentY, opacity: contentOpacity }}
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero2__kicker" variants={item} transition={{ duration: 0.6, ease }}>
            <T en="Direct Source · Malaysia · Est. 2004" zh="源头直供 · 马来西亚 · 创立于2004年" />
          </motion.p>

          <h1 className="hero2__title">
            <T
              en={<TypewriterLine text="PURE MALAYSIAN" />}
              zh={<TypewriterLine text="马来西亚纯正" />}
            />
            <motion.em variants={glowIn} initial="hidden" animate="visible">
              <T en="BIRD'S NEST" zh="燕窝" />
            </motion.em>
          </h1>

          <motion.p className="hero2__sub" variants={item} transition={{ duration: 0.75, ease }}>
            <T
              en="Premium Malaysian bird's nest. Hand cleaned. Naturally processed."
              zh="马来西亚优质燕窝。纯手工清洁。天然处理工艺。"
            />
          </motion.p>

          <motion.div className="hero2__cta" variants={item} transition={{ duration: 0.75, ease }}>
            <a
              href={`https://wa.me/601172287202?text=${encodeURIComponent('您好，我想了解以下产品报价：\n\n产品：\n采购数量：\n目的国家：')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero2__btn"
              onClick={() => events.getQuoteClick('hero')}
            >
              <T en="Get Wholesale Quote" zh="获取批发报价" />
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="hero2__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{ opacity: useTransform(scrollY, [0, 180], [1, 0]) }}
        aria-hidden="true"
      >
        <span className="hero2__scroll-label">
          <T en="Scroll" zh="向下" />
        </span>
        <motion.span
          className="hero2__scroll-line"
          animate={prefersReducedMotion ? {} : { scaleY: [0.25, 1, 0.25], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
