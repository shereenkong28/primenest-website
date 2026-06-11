import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { T } from '../contexts/LangContext'

const stats = [
  { value: '20+', labelEn: 'Years in Business', labelZh: '年行业经验' },
  { value: '2004', labelEn: 'Founded in Kelantan', labelZh: '吉兰丹创立' },
  { value: '100%', labelEn: 'Owner-Operated Farms', labelZh: '自营燕屋' },
]

const MuteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
)

const UnmuteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
)

export default function FounderStory() {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)

  function toggleSound() {
    const vid = videoRef.current
    if (!vid) return
    vid.muted = !vid.muted
    setMuted(vid.muted)
  }

  return (
    <section className="section" id="about-founder">
      <div className="container">
        <div className="fs-layout">

          {/* Video / media side */}
          <FadeIn className="fs-media">
            <div className="fs-media__wrap">
              <video
                ref={videoRef}
                className="fs-media__video"
                src="/founder.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Sound toggle */}
              <motion.button
                className="fs-media__sound-btn"
                onClick={toggleSound}
                whileTap={{ scale: 0.9 }}
                title={muted ? 'Unmute' : 'Mute'}
              >
                {muted ? <MuteIcon /> : <UnmuteIcon />}
                <span>{muted ? <T en="Tap for sound" zh="点击开声" /> : <T en="Sound on" zh="声音已开" />}</span>
              </motion.button>

            </div>
          </FadeIn>

          {/* Story side */}
          <FadeIn delay={0.12} className="fs-body">
            <span className="eyebrow"><T en="Our Story" zh="创始人故事" /></span>

            <h2 className="fs-headline">
              <T
                en={<>Built on Quality,<br />Not Compromise.</>}
                zh={<>以品质为本，<br />绝不妥协。</>}
              />
            </h2>

            <p className="fs-text">
              <T
                en="When I started in 2004, the bird's nest trade was riddled with opaque supply chains, inconsistent grades, and buyers who never truly knew what they were getting. That frustrated me deeply."
                zh="2004年我入行时，燕窝贸易充斥着不透明的供应链、参差不齐的品质，买家往往根本不知道自己买到的是什么。这让我深感不满。"
              />
            </p>
            <p className="fs-text">
              <T
                en="So I built PrimeNest Global around one principle: every nest we supply must meet the standard I'd set for my own family. Owner-operated swiftlet houses in Kelantan. Real lab reports. Honest pricing. Nothing hidden."
                zh="因此，我以一个原则创立了PrimeNest Global：我们供应的每一盏燕窝，都必须达到我为自己家人设定的标准。自营吉兰丹燕屋、真实化验报告、公开透明的价格，绝无隐瞒。"
              />
            </p>
            <p className="fs-text">
              <T
                en="Twenty years on, that commitment hasn't changed. It's the reason our buyers stay."
                zh="二十年如一日，这份承诺始终如一。这正是我们买家长期合作的原因。"
              />
            </p>

            <p className="fs-text">
              <T
                en="Our journey began with hands-on involvement in swiftlet house operations, nest harvesting, and raw material selection. Over the years, we established close partnerships with processing facilities and developed deeper knowledge in sourcing standards, cleaning methods, and export-ready preparation for international markets."
                zh="我们的旅程始于对燕屋运营、燕窝采收及原料筛选的亲身参与。多年来，我们与加工厂建立了紧密合作关系，并在货源标准、清洁方法及国际市场出口准备方面积累了深厚的专业知识。"
              />
            </p>

            {/* Stats row */}
            <div className="fs-stats">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="fs-stat"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.18 + i * 0.1, duration: 0.45 }}
                >
                  <span className="fs-stat__value">{s.value}</span>
                  <span className="fs-stat__label"><T en={s.labelEn} zh={s.labelZh} /></span>
                </motion.div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
