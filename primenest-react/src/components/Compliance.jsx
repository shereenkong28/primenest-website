import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'
import { T } from '../contexts/LangContext'

const certs = [
  {
    status: 'active', statusEn: 'Confirmed', statusZh: '已确认',
    titleEn: 'SOURCE TRANSPARENCY', titleZh: '货源透明',
    subEn: 'Direct Source · Malaysia', subZh: '源头直供 · 马来西亚',
    descEn: 'Direct involvement in swiftlet house operations, harvesting, and raw material sourcing in Malaysia.',
    descZh: '直接参与马来西亚燕屋运营、燕窝采收及原料筛选全过程。',
  },
  {
    status: 'active', statusEn: 'Confirmed', statusZh: '已确认',
    titleEn: 'QUALITY CONTROL', titleZh: '品质管控',
    subEn: 'Selection • Cleaning • Inspection', subZh: '原料筛选 • 清洁处理 • 品质检验',
    descEn: 'Every batch undergoes careful raw material selection, cleaning, and quality inspection before export preparation.',
    descZh: '每批货物均经过严格的原料筛选、清洁处理及品质检验，方可进入出口备货流程。',
  },
  {
    status: 'active', statusEn: 'On Request', statusZh: '可应需求',
    titleEn: 'LAB TEST REPORTS', titleZh: '实验室检测报告',
    subEn: 'Nitrite • Microbial • Heavy Metals', subZh: '亚硝酸盐 · 微生物 · 重金属',
    descEn: 'Reports available upon request.',
    descZh: '可根据客户需求提供相关检测报告。',
  },
  {
    status: 'active', statusEn: 'Available', statusZh: '可提供',
    titleEn: 'EXPORT DOCUMENTATION', titleZh: '出口文件支持',
    subEn: 'Destination Market Support', subZh: '按进口市场要求',
    descEn: 'Export documentation support based on destination market requirements.',
    descZh: '根据进口国市场要求提供相关出口文件支持。',
  },
  {
    status: 'active', statusEn: 'Active', statusZh: '已注册',
    titleEn: 'SSM REGISTERED', titleZh: 'SSM注册企业',
    subEn: 'Malaysia Business Registration', subZh: '马来西亚商业注册',
    descEn: 'PrimeNest Global is a registered Malaysian business entity.',
    descZh: 'PrimeNest Global 为合法注册的马来西亚企业。',
  },
  {
    status: 'active', statusEn: 'On Request', statusZh: '可安排',
    titleEn: 'ADDITIONAL CERTIFICATIONS', titleZh: '额外认证支持',
    subEn: 'HACCP • GMP • HALAL • Export Market Requirements', subZh: 'HACCP · GMP · Halal · 出口市场认证要求',
    descEn: 'Certification support available based on destination market requirements.',
    descZh: '可根据进口国市场要求协助安排相关认证支持。',
  },
]

export default function Compliance() {
  return (
    <section className="section section--mid section--pb-sm" id="compliance">
      <div className="container">

        <FadeIn className="section-head section-head--center">
          <span className="eyebrow">
            <T en="Compliance & Certification" zh="合规与认证" />
          </span>
          <h2><T en="Compliance & Supply Assurance" zh="品质与供应保障" /></h2>
          <p className="section-lede">
            <T
              en="Direct source Malaysian bird's nest with quality control and export support for international buyers."
              zh="马来西亚直采燕窝，提供品质管控与出口支持，服务全球进口商与经销商。"
            />
          </p>
          <div className="gold-rule" />
        </FadeIn>

        <StaggerContainer className="cert-grid">
          {certs.map((c, i) => (
            <StaggerItem
              key={i}
              className="cert-card"
              style={{ cursor: 'default' }}
              whileHover={{ y: -5, boxShadow: '0 12px 32px rgba(201,168,76,0.1)' }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            >
              <span className={`cert-card__status cert-card__status--${c.status}`}>
                <T en={c.statusEn} zh={c.statusZh} />
              </span>
              <h3><T en={c.titleEn} zh={c.titleZh} /></h3>
              <div className="cert-card__sub"><T en={c.subEn} zh={c.subZh} /></div>
              <p><T en={c.descEn} zh={c.descZh} /></p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <p className="cert-note">
            <T
              en="Documentation and verification details are shared directly with serious wholesale buyers during the quote process."
              zh="相关文件及检测资料将在报价沟通中向已核实买家提供。"
            />
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
