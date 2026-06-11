import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { useLang } from '../contexts/LangContext'

const PROCESS_STEPS = [
  {
    num: '01',
    en: { title: 'Operational\nSwiftlet House', desc: 'Active swiftlet house under regular management and harvesting operations.' },
    zh: { title: '运营中的燕屋', desc: '持续运营与管理的燕屋，提供稳定的燕窝采收来源。' },
    image: '/st-swiftlet-house.jpeg',
  },
  {
    num: '02',
    en: { title: 'Raw Material\nCollection', desc: 'Nests harvested from managed swiftlet houses under regular operations.' },
    zh: { title: '原料采集', desc: '从运营中的燕屋进行规范采摘。' },
    image: '/st-harvesting.jpeg',
  },
  {
    num: '03',
    en: { title: 'Raw Material\nSelection', desc: 'Incoming raw nests sorted and graded by quality before processing.' },
    zh: { title: '原料分选', desc: '按品质分级，进入清洁处理流程。' },
    image: '/raw heavy feather nest 2.jpeg',
  },
  {
    num: '04',
    en: { title: 'Cleaning &\nProcessing', desc: "Bird's nests are cleaned and processed in a controlled hygienic environment." },
    zh: { title: '清洁与加工', desc: '在卫生管理规范的加工环境中进行处理。' },
    image: '/st-processing-facility.jpeg',
    imgPosition: '75% center',
  },
  {
    num: '05',
    en: { title: 'Hand Picking', desc: 'Workers manually remove remaining feathers using precision tweezers.' },
    zh: { title: '人工挑毛', desc: '使用镊子手工去除残余羽毛。' },
    image: '/st-manual-cleaning.jpeg',
  },
  {
    num: '06',
    en: { title: 'Shaping &\nMoulding', desc: 'Cleaned nests shaped into uniform cups using stainless steel moulds.' },
    zh: { title: '定型处理', desc: '使用不锈钢模具将燕窝塑形为标准盏形。' },
    image: '/st-shaping-moulding.jpeg',
    fit: true,
  },
  {
    num: '07',
    en: { title: 'Drying\nProcess', desc: 'Moulded nests dried under controlled temperature and humidity.' },
    zh: { title: '烘干程序', desc: '在受控温湿度环境中完成烘干处理。' },
    image: '/st-drying-racks.jpeg',
  },
  {
    num: '08',
    en: { title: 'Traceability &\nExport', desc: 'Each nest is labelled with traceability codes for product verification and export market requirements.' },
    zh: { title: '溯源与出口合规', desc: '每片燕窝贴附溯源码，满足产品验证与出口市场合规要求。' },
    image: '/st-traceability.jpeg',
    fit: true,
  },
]

/* ── DESKTOP: 4 + 4 grid card with continuous gold flow line ── */
function GridCard({ step, idx, lang }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })
  const title = lang === 'zh' ? step.zh.title : step.en.title
  const desc  = lang === 'zh' ? step.zh.desc  : step.en.desc

  return (
    <motion.div
      ref={ref}
      className="pf-card"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (idx % 4) * 0.07 }}
    >
      <div className="pf-card__badge">{step.num}</div>
      <div className={`pf-card__frame${step.fit ? ' pf-card__frame--fit' : ''}`}>
        <img
          src={step.image}
          alt={title.replace('\n', ' ')}
          className="pf-card__img"
          loading="lazy"
          style={step.imgPosition ? { objectPosition: step.imgPosition } : undefined}
        />
      </div>
      <h4 className="pf-card__title">{title}</h4>
      <p className="pf-card__desc">{desc}</p>
    </motion.div>
  )
}

/* ── MOBILE: vertical audit-trail timeline card ── */
function StepCard({ step, index, lang, onActive }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.6, margin: '-15% 0px -25% 0px' })
  const title = lang === 'zh' ? step.zh.title : step.en.title
  const desc  = lang === 'zh' ? step.zh.desc  : step.en.desc

  useEffect(() => {
    if (inView) onActive(index)
  }, [inView, index, onActive])

  return (
    <div ref={ref} className={`st-row ${inView ? 'is-active' : ''}`}>
      <span className="st-row__marker" aria-hidden="true" />
      <motion.article
        className="st-card"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="st-card__media">
          <span className="st-card__badge">{step.num}</span>
          <img
            src={step.image}
            alt={title.replace('\n', ' ')}
            className={`st-card__img${step.fit ? ' st-card__img--fit' : ''}`}
            style={step.imgPosition ? { objectPosition: step.imgPosition } : undefined}
            loading="lazy"
          />
        </div>
        <div className="st-card__body">
          <h3 className="st-card__title">{title}</h3>
          <span className="st-card__rule" />
          <p className="st-card__desc">{desc}</p>
        </div>
      </motion.article>
    </div>
  )
}

export default function SourceTransparency() {
  const { lang } = useLang()
  const row1 = PROCESS_STEPS.slice(0, 4)
  const row2 = PROCESS_STEPS.slice(4, 8)

  return (
    <section className="section section--alt" id="transparency">
      <div className="container">

        <FadeIn className="section-head section-head--center">
          <span className="eyebrow">
            {lang === 'zh' ? '源头透明化' : 'Source Transparency'}
          </span>
          <h2>{lang === 'zh' ? '八大工序流程' : 'Our 8-Step Journey'}</h2>
          <p className="section-lede">
            {lang === 'zh'
              ? '了解燕窝从采摘、清洁、定型、品质检验到出口准备的完整生产流程。'
              : "Follow the complete journey — from raw material collection through cleaning, moulding and quality inspection to export preparation."}
          </p>
          <div className="gold-rule" />
        </FadeIn>

        {/* DESKTOP — 4 + 4 grid with gold S-curve connector */}
        <div className="st-desktop">
          <div className="pf-outer">
            <div className="pf-infographic">
              <div className="pf-row pf-row--top">
                {row1.map((s, i) => <GridCard key={s.num} step={s} idx={i} lang={lang} />)}
              </div>
              <div className="pf-gap" />
              {/* DOM [5,6,7,8] reversed visually → [8←7←6←5] S-curve */}
              <div className="pf-row pf-row--rtl pf-row--bottom">
                {row2.map((s, i) => <GridCard key={s.num} step={s} idx={i} lang={lang} />)}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE — 2-column card grid */}
        <div className="st-mobile">
          <div className="st-mob-grid">
            {PROCESS_STEPS.map((s, i) => <GridCard key={s.num} step={s} idx={i} lang={lang} />)}
          </div>
        </div>

        <p className="sct-disclaimer">
          {lang === 'zh'
            ? '实拍参考图片，供采购商了解产品来源与供应流程。'
            : 'Reference images for wholesale buyers to understand product sourcing and supply processes.'}
        </p>

      </div>
    </section>
  )
}
