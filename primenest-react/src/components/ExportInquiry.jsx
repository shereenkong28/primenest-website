import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from './FadeIn'
import { T } from '../contexts/LangContext'

const chips = [
  { key: 'malaysia',  flag: '🇲🇾', en: 'Malaysia',   zh: '马来西亚' },
  { key: 'china',     flag: '🇨🇳', en: 'China',      zh: '中国' },
  { key: 'singapore', flag: '🇸🇬', en: 'Singapore',  zh: '新加坡' },
  { key: 'taiwan',    flag: '🇹🇼', en: 'Taiwan',     zh: '台湾' },
  { key: 'brunei',    flag: '🇧🇳', en: 'Brunei',     zh: '文莱' },
]

const products = [
  "Sabah Cave Nest / 沙巴野生洞燕",
  "Dry-Picked Bird's Nest / 干挑大盏",
  "Golden Cave Nest / 金丝洞燕",
  "White Cave Nest / 洞燕",
  "5A Wet-Picked Bird's Nest / 5A湿挑中燕盏",
  "Mixed / 混合",
]

export default function ExportInquiry() {
  const [selected, setSelected] = useState([])
  const [status, setStatus] = useState('')

  function toggleChip(key) {
    setSelected(s => s.includes(key) ? s.filter(k => k !== key) : [...s, key])
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thank you — we will respond within one business day. / 感谢您的询盘，我们将在一个工作日内回复。')
    e.target.reset()
    setSelected([])
  }

  return (
    <section className="section" id="export">
      <div className="container">
        <div className="export-wrap">

          <FadeIn className="export-header">
            <span className="eyebrow"><T en="Export Inquiry" zh="出口询盘" /></span>
            <h2><T en="Request a Wholesale Quote" zh="申请批发报价" /></h2>
            <p className="section-lede" style={{ marginInline: 'auto', textAlign: 'center' }}>
              <T
                en="Share your sourcing requirements and our team will review your enquiry for a tailored wholesale quote."
                zh="请填写您的采购需求，我们将根据产品规格、数量及目的地为您提供批发报价。"
              />
            </p>
            <div className="export-targets">
              {chips.map(c => (
                <motion.button
                  key={c.key}
                  type="button"
                  className={`country-chip ${selected.includes(c.key) ? 'active' : ''}`}
                  onClick={() => toggleChip(c.key)}
                  whileTap={{ scale: 0.95 }}
                >
                  {c.flag} <T en={c.en} zh={c.zh} />
                </motion.button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form className="export-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="exportName"><T en="Company / Name" zh="公司/姓名" /></label>
                  <input id="exportName" name="company" type="text" required placeholder="Your company or name" />
                </div>
                <div className="field">
                  <label htmlFor="exportEmail"><T en="Email" zh="邮箱" /></label>
                  <input id="exportEmail" name="email" type="email" required placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="exportCountry"><T en="Destination Country" zh="目的地国家" /></label>
                  <input id="exportCountry" name="country" type="text"
                    placeholder="e.g. China / 中国"
                    value={selected.map(k => chips.find(c => c.key === k)?.en).join(', ')}
                    onChange={() => {}}
                  />
                </div>
                <div className="field">
                  <label htmlFor="exportProduct"><T en="Product Interest" zh="产品类型" /></label>
                  <select id="exportProduct" name="product">
                    <option value="" disabled>— Select / 请选择 —</option>
                    {products.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="qtyNeeded"><T en="Quantity Needed" zh="所需数量" /></label>
                  <input id="qtyNeeded" name="qtyNeeded" type="text" placeholder="e.g. 10 kg / 10公斤" />
                </div>
                <div className="field">
                  <label htmlFor="monthlyDemand"><T en="Monthly Demand" zh="月需求量" /></label>
                  <select id="monthlyDemand" name="monthlyDemand">
                    <option value="" disabled>— Select / 请选择 —</option>
                    <option value="1-5">1 – 5 kg / month</option>
                    <option value="5-20">5 – 20 kg / month</option>
                    <option value="20-50">20 – 50 kg / month</option>
                    <option value="100plus">100kg+ / month</option>
                  </select>
                </div>
              </div>
              <div className="form-row form-row--full" style={{ marginBottom: '1.75rem' }}>
                <div className="field">
                  <label htmlFor="exportMsg"><T en="Message" zh="留言" /></label>
                  <textarea id="exportMsg" name="message" rows={4}
                    placeholder="Tell us your product, quantity, destination, and delivery requirements. / 请填写产品、数量、目的地及交货需求。" />
                </div>
              </div>
              <motion.button
                type="submit"
                className="btn btn--gold btn--full"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <T en="Request Wholesale Quote" zh="申请批发报价" />
              </motion.button>
              {status && <p className="form-note">{status}</p>}
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
