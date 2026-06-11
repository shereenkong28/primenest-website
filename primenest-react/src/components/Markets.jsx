import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem, hoverSpring } from './FadeIn'
import { T } from '../contexts/LangContext'

const markets = [
  {
    flag: 'https://flagcdn.com/w40/cn.png', code: 'CN',
    nameEn: 'China', nameZh: '中国',
    subEn: 'Mainland · Importers · Distributors', subZh: '进口商 · 经销商 · 批发商',
    descEn: "China remains a key market for Malaysian edible bird's nest, with demand from TCM retailers, gifting houses, distributors, and premium e-commerce channels. We support importers and licensed distributors with consistent grades and export-ready supply.",
    descZh: '中国仍是马来西亚燕窝的重要市场，需求来自进口商、经销商、中药行及礼品渠道。我们提供稳定等级与出口供应。',
  },
  {
    flag: 'https://flagcdn.com/w40/sg.png', code: 'SG',
    nameEn: 'Singapore', nameZh: '新加坡',
    subEn: 'Distributors · TCM · Boutique Brands', subZh: '经销商 · 中药行 · 精品品牌',
    descEn: "Singapore is a quality-driven market with strong demand for clean, well-presented bird's nest. Our hand-cleaned, no-bleach grades are suited for TCM retailers, boutique gifting brands, wellness stores, and regional distributors.",
    descZh: '新加坡市场重视清洁度、外观及可追溯性。我们的手工清洗、无漂白燕窝适合中药行、精品礼品品牌及健康零售渠道。',
  },
  {
    flag: 'https://flagcdn.com/w40/tw.png', code: 'TW',
    nameEn: 'Taiwan', nameZh: '台湾',
    subEn: 'Importers · Health Food · Gifting', subZh: '进口商 · 健康食品 · 礼品市场',
    descEn: "Taiwan has a mature consumer base for premium bird's nest, especially in postpartum care, gifting, and health food retail. We supply consistent grades suitable for long-term wholesale distribution.",
    descZh: '台湾拥有成熟的高端燕窝消费市场，尤其集中在产后护理、送礼及健康食品渠道。我们提供稳定等级，适合长期批发合作。',
  },
  {
    flag: 'https://flagcdn.com/w40/bn.png', code: 'BN',
    nameEn: 'Brunei', nameZh: '文莱',
    subEn: 'Local Distributors · Wellness Retail', subZh: '本地经销商 · 健康零售',
    descEn: "Brunei is a close regional market with demand for clean, traceable bird's nest. Our Kelantan source supports shorter lead times, flexible order sizes, and direct supply to local distributors and wellness retailers.",
    descZh: '文莱是邻近市场，对干净、可追溯燕窝有稳定需求。吉兰丹产地带来更快交期及更灵活的采购数量。',
  },
]

const globalTags = ['🇺🇸 USA', '🇬🇧 UK', '🇦🇺 Australia', '🇯🇵 Japan', '🇰🇷 Korea', '🇦🇪 UAE', '🇹🇭 Thailand', '🇻🇳 Vietnam']

export default function Markets() {
  return (
    <section className="section section--mid" id="markets">
      <div className="container">

        <FadeIn className="section-head section-head--center">
          <span className="eyebrow"><T en="Priority Markets" zh="重点市场" /></span>
          <h2><T en="Markets We Serve" zh="我们服务的市场" /></h2>
          <p className="section-lede">
            <T
              en="Supplying selected wholesale buyers across key Asian markets, with export enquiries welcome from other regions."
              zh="专注亚洲重点市场，同时欢迎其他国家与地区的采购咨询。"
            />
          </p>
          <div className="gold-rule" />
        </FadeIn>

        <StaggerContainer className="pm-grid">
          {markets.map((m) => (
            <StaggerItem
              key={m.code}
              className="pm-card"
              whileHover={{ y: -6, boxShadow: '0 14px 36px rgba(201,168,76,0.1)' }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <div className="pm-card__head">
                <span className="pm-card__flag">
                  <img src={m.flag} alt={`${m.nameEn} flag`} loading="lazy" />
                </span>
                <span className="pm-card__code">{m.code}</span>
                <div className="pm-card__name">
                  <T en={m.nameEn} zh={m.nameZh} />
                  <small><T en={m.subEn} zh={m.subZh} /></small>
                </div>
              </div>
              <div className="pm-card__divider" />
              <p className="pm-card__body"><T en={m.descEn} zh={m.descZh} /></p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="global-reach">
          <FadeIn className="global-reach__left">
            <span className="eyebrow"><T en="Global Export Reach" zh="全球出口咨询" /></span>
            <p className="global-reach__copy">
              <T
                en="We also welcome wholesale enquiries from buyers in North America, Europe, Middle East, Australia, Japan, South Korea, Vietnam, Thailand, and other international markets."
                zh="同时欢迎来自其他国家和地区的批发采购咨询，包括北美、欧洲、中东、澳大利亚、日本、韩国及东南亚市场。"
              />
            </p>
            <StaggerContainer className="global-reach__tags" as="div">
              {globalTags.map(tag => (
                <StaggerItem
                  key={tag}
                  as="span"
                  className="global-reach__tag"
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={hoverSpring}
                >
                  {tag}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
          <FadeIn className="global-reach__right" delay={0.1}>
            <p className="global-reach__note">
              <T
                en="Our products ship internationally in agreed formats. Buyers outside our priority markets are welcome to submit an Export Inquiry — we will review and respond within one business day."
                zh="可根据不同国家的进口要求安排相应出口流程与文件支持。"
              />
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  )
}
