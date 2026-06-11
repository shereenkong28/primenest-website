import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn'
import { T } from '../contexts/LangContext'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ width: 17, height: 17 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
  </svg>
)

const terms = [
  {
    labelEn: 'MOQ', labelZh: '最低起订量',
    values: [
      { en: <><strong>1 kg</strong> per SKU minimum</>, zh: <><strong>单一品项起订 1 公斤</strong></> },
      { en: <span style={{ fontSize: '.8rem', opacity: .8 }}>First order: 5 kg+ recommended for shipping efficiency</span>, zh: <span style={{ fontSize: '.8rem', opacity: .8 }}>首单建议总量 5 公斤以上，优化物流成本</span> },
    ],
  },
  {
    labelEn: 'Payment', labelZh: '付款方式',
    values: [
      { en: <><strong>First order:</strong> 100% T/T in advance</>, zh: <><strong>首次合作：</strong>100% T/T 预付</> },
      { en: <><strong>Returning buyers:</strong> 50% deposit + 50% before shipment</>, zh: <><strong>长期客户：</strong>50% 定金 + 50% 发货前付清</> },
    ],
  },
  {
    labelEn: 'Lead Time', labelZh: '交货期',
    values: [
      { en: <><strong>White Nest:</strong> 7–30 working days</>, zh: <><strong>白燕盏系列：</strong>7–30 个工作日</> },
      { en: <><strong>Cave Nest:</strong> 15–30 working days (seasonal)</>, zh: <><strong>野生洞燕：</strong>15–30 个工作日（视季节产量）</> },
    ],
  },
  {
    labelEn: 'Shipping', labelZh: '运输方式',
    values: [
      { en: <><strong>Air freight</strong> — standard for all orders</>, zh: <><strong>空运</strong>为默认运输方式</> },
      { en: <span style={{ fontSize: '.8rem', opacity: .8 }}>Sea freight available for bulk orders on request</span>, zh: <span style={{ fontSize: '.8rem', opacity: .8 }}>大货订单可按需安排海运</span> },
    ],
  },
  {
    labelEn: 'Monthly Supply', labelZh: '稳定月供应量',
    values: [
      { en: <><strong>100 kg+</strong> stable monthly output</>, zh: <><strong>月产 100 公斤以上</strong>，稳定供货</> },
      { en: <span style={{ fontSize: '.8rem', opacity: .8 }}>Long-term partners receive priority allocation</span>, zh: <span style={{ fontSize: '.8rem', opacity: .8 }}>长期合作客户享优先备货权</span> },
    ],
  },
  {
    labelEn: 'Export Docs', labelZh: '出口文件',
    values: [
      { en: <>Certificate of Origin, lab reports & shipment docs</>, zh: <>原产地证书、化验报告及装运文件</> },
      { en: <span style={{ fontSize: '.8rem', opacity: .8 }}>Available upon request</span>, zh: <span style={{ fontSize: '.8rem', opacity: .8 }}>可按需申请</span> },
    ],
  },
]


export default function WholesaleTerms() {
  return (
    <section className="section section--alt" id="wholesale-terms">
      <div className="container">

        <FadeIn className="section-head section-head--center">
          <span className="eyebrow"><T en="Trade Terms" zh="贸易条款" /></span>
          <h2><T en="Wholesale Terms" zh="批发合作条款" /></h2>
          <p className="section-lede">
            <T en="Clear order, payment, and supply terms for wholesale buyers." zh="面向国际批发买家的清晰采购条款。" />
          </p>
          <div className="gold-rule" />
        </FadeIn>

        <StaggerContainer className="wt-grid">
          {terms.map((t, i) => (
            <StaggerItem
              key={i}
              className="wt-card"
              whileHover={{ y: -4, boxShadow: '0 10px 28px rgba(201,168,76,0.08)' }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            >
              <span className="wt-card__label"><T en={t.labelEn} zh={t.labelZh} /></span>
              <div className="wt-card__values">
                {t.values.map((v, j) => (
                  <span key={j} className="wt-card__val"><T en={v.en} zh={v.zh} /></span>
                ))}
              </div>
            </StaggerItem>
          ))}
          {/* Notice sits in row 2 beside Export Docs, below Lead Time & Shipping */}
          <FadeIn className="wt-notice wt-notice--inline">
            <span className="wt-notice__icon">⚠</span>
            <div>
              <strong><T en="Natural Cave Nest — Seasonal & Limited Supply" zh="天然洞燕 — 季节性产品，月供应有限" /></strong>
              <p><T
                en="Natural Cave Nest are seasonal products with limited monthly availability. Advance booking of 4 weeks is recommended. Annual agreement partners receive priority allocation."
                zh="天然洞燕为季节性产品，月供应有限。建议提前 4 周预订。年度协议客户享有优先备货权。"
              /></p>
            </div>
          </FadeIn>
        </StaggerContainer>


        <FadeIn delay={0.1}>
          <div className="wt-wa-cta">
            <p className="wt-wa-cta__heading">
              <T en="Need a wholesale quote or product specifications?" zh="需要批发报价或产品资料？" />
            </p>
            <p className="wt-wa-cta__sub">
              <T en="Contact our team directly." zh="请直接联系我们获取报价与产品资料。" />
            </p>
            <motion.a
              className="wt-wa-cta__btn"
              href="https://wa.me/601172287202"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ opacity: 0.88 }}
              whileTap={{ scale: 0.97 }}
            >
              <WhatsAppIcon />
              <T en="WhatsApp Us" zh="WhatsApp 咨询" />
            </motion.a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
