import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { T, useLang } from '../contexts/LangContext'
import { houseNestTabs, caveNestTabs } from '../data/products'
import { events } from '../analytics'

const WA_NUMBER = '601172287202'

function buildWaUrl(productName, lang) {
  const msg = lang === 'zh'
    ? `您好，我想了解以下产品报价：\n\n产品：${productName}\n采购数量：\n目的国家：`
    : `Hello, I would like to enquire about the following product:\n\nProduct: ${productName}\nOrder Quantity:\nDestination Country:`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
}

function ProductCard({ product, lang }) {
  const name = lang === 'zh' ? product.nameZh : product.nameEn
  return (
    <motion.div
      key={product.id}
      className="wp-featured-card"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="wp-featured-card__img">
        <img
          src={product.image}
          alt={product.nameEn}
          style={{ transform: `scale(${product.imageScale || 1.2})`, transformOrigin: 'center center' }}
        />
        {product.badge && (
          <span className="wp-card__badge">
            <T en={product.badge.en} zh={product.badge.zh} />
          </span>
        )}
      </div>

      <div className="wp-featured-card__body">
        <div className="wp-card__name-en">
          <T en={product.nameEn} zh={product.nameZh} />
        </div>

        <p className="wp-card__desc">
          <T en={product.descEn} zh={product.descZh} />
        </p>

        <div className="wp-card__moq">
          <span className="wp-card__moq-label">MOQ</span> {product.moq}
        </div>

        {product.specs.length > 0 && (
          <div className="wp-card__specs">
            {product.specs.map((s, i) => (
              <span key={i} className="wp-card__spec-tag">
                <T en={s.en} zh={s.zh} />
              </span>
            ))}
          </div>
        )}

        <div className="wp-card__divider" />

        <a
          href={buildWaUrl(name, lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="wp-inquiry-btn"
          onClick={() => events.requestWholesaleQuote(name)}
        >
          <T en="Request Wholesale Quote" zh="获取批发报价" />
        </a>

        <p className="wp-inquiry-note">
          <T
            en="Pricing varies by order volume and market conditions. Contact us for the latest quote."
            zh="价格根据采购数量及市场行情更新，请联系我们获取最新报价。"
          />
        </p>
      </div>
    </motion.div>
  )
}

function ProductGroup({ titleEn, titleZh, tabs }) {
  const { lang } = useLang()
  const [activeIdx, setActiveIdx] = useState(0)
  const active = tabs[activeIdx]

  return (
    <div className="wp-group">
      <FadeIn>
        <h3 className="wp-group__title">
          <T en={titleEn} zh={titleZh} />
        </h3>
      </FadeIn>

      <FadeIn delay={0.08}>
        <div className="wp-tabs" role="tablist">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={i === activeIdx}
              className={`wp-tab ${i === activeIdx ? 'wp-tab--active' : ''}`}
              onClick={() => { setActiveIdx(i); events.productTabClick(tab.nameEn, titleEn) }}
            >
              <T en={tab.nameEn} zh={tab.nameZh} />
            </button>
          ))}
        </div>
      </FadeIn>

      <AnimatePresence mode="wait">
        <ProductCard key={active.id} product={active} lang={lang} />
      </AnimatePresence>
    </div>
  )
}

export default function WholesalePricing() {
  return (
    <section className="section section--mid" id="wholesale-pricing">
      <div className="container">

        <FadeIn className="section-head section-head--center">
          <span className="eyebrow"><T en="Wholesale" zh="批发" /></span>
          <h2><T en="Wholesale Products" zh="批发产品" /></h2>
          <p className="section-lede">
            <T
              en="Stable supply for importers, distributors, and wholesale buyers. Contact us for the latest product specifications and wholesale pricing."
              zh="为进口商、经销商及批发采购商提供稳定供应。欢迎联系我们获取最新产品规格与批发报价。"
            />
          </p>
          <div className="gold-rule" />
        </FadeIn>

        <ProductGroup titleEn="House Nest Products" titleZh="屋燕系列" tabs={houseNestTabs} />
        <ProductGroup titleEn="Natural Cave Nest Products" titleZh="天然洞燕系列" tabs={caveNestTabs} />

      </div>
    </section>
  )
}
