import { GA4_MEASUREMENT_ID } from './config'

// ── GA4 initialisation ────────────────────────────────────────
export function initGA4() {
  if (!GA4_MEASUREMENT_ID) return // No ID configured — skip

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  // GA4 automatically captures: total visitors, unique visitors,
  // country, city, device type, traffic source (organic, direct,
  // social, referral), most visited pages, and browser language.
  gtag('config', GA4_MEASUREMENT_ID, { send_page_view: true })
}

// ── GA4 event helper ──────────────────────────────────────────
function track(eventName, params = {}) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

// ── Custom events ─────────────────────────────────────────────
// Called from individual components to track key interactions.
export const events = {
  // Fired when a visitor clicks "Request Wholesale Quote"
  requestWholesaleQuote: (productName) =>
    track('request_wholesale_quote', { product_name: productName }),

  // Fired when a visitor clicks any WhatsApp button
  // location: 'contact_section' | 'float_popup'
  whatsappClick: (location) =>
    track('whatsapp_click', { click_location: location }),

  // Fired when a visitor clicks the WeChat contact button
  wechatClick: () =>
    track('wechat_click'),

  // Fired when a visitor clicks the email address link
  emailClick: () =>
    track('email_click'),

  // Fired when a visitor clicks the hero "Get Wholesale Quote" CTA
  getQuoteClick: (location) =>
    track('get_quote_click', { click_location: location }),

  // Fired when a visitor switches product tabs
  productTabClick: (productName, category) =>
    track('product_tab_click', { product_name: productName, category }),
}
