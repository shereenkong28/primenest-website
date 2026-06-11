import { StaggerContainer, StaggerItem, FadeIn } from './FadeIn'
import { T } from '../contexts/LangContext'

const certs = [
  { en: 'Hand-Cleaned · No Bleach', zh: '手工挑毛 · 无漂白' },
  { en: 'Lab Reports on Request', zh: '可提供化验报告' },
  { en: 'HACCP · GMP · HALAL Support', zh: 'HACCP · GMP · 清真认证支持' },
]

const items = [
  { num: '20+', label: { en: 'Years in Swiftlet Farming', zh: '燕屋养殖经验' } },
  {
    num: <span>100<small style={{ fontSize: '.55em', verticalAlign: '.6em', marginLeft: '.15em' }}>kg+</small></span>,
    label: { en: 'Monthly Supply', zh: '月供应量' },
  },
  { num: '100%', label: { en: 'Hand Cleaned', zh: '全程人工挑毛' } },
  {
    num: <T en="Direct Source" zh="源头直供" />,
    label: { en: 'No Middlemen', zh: '无中间商' },
  },
]

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Company credentials at a glance">
      <div className="container">
        <StaggerContainer className="trust-strip__grid">
          {items.map((item, i) => (
            <StaggerItem key={i} className="trust-strip__item">
              <span className="trust-strip__num">{item.num}</span>
              <span className="trust-strip__lbl">
                <T en={item.label.en} zh={item.label.zh} />
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="trust-strip__certs" aria-label="Standards and certifications">
          {certs.map((c, i) => (
            <span key={i} className="trust-strip__cert">
              <svg className="trust-strip__cert-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3.5 8.5l3 3 6-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <T en={c.en} zh={c.zh} />
            </span>
          ))}
        </FadeIn>
      </div>
    </section>
  )
}
