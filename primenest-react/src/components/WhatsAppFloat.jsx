import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { T } from '../contexts/LangContext'
import { events } from '../analytics'

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true" style={{ width: 30, height: 30 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
  </svg>
)

const WaIconSm = () => (
  <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true" style={{ width: 18, height: 18 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
  </svg>
)

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const contact = document.getElementById('contact')
    if (!contact) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting)
        if (entry.isIntersecting) setOpen(false)
      },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(contact)
    return () => observer.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          className="wa-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <AnimatePresence>
            {open && (
              <motion.div
                className="wa-popup"
                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.97 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
              >
                <h4><T en="Chat with Us" zh="与我们联系" /></h4>
                <p><T en="Choose a contact below to start a WhatsApp conversation." zh="选择以下联系方式开始 WhatsApp 对话。" /></p>

                <a href="https://wa.me/601172287202" target="_blank" rel="noopener noreferrer" className="wa-option" onClick={() => events.whatsappClick('float_popup')}>
                  <div className="wa-opt-icon"><WaIconSm /></div>
                  <div className="wa-opt-text">
                    <strong>+60 11-7228 7202</strong>
                    <span><T en="Sales & Wholesale" zh="销售与批发" /></span>
                  </div>
                </a>

                <a href="https://wa.me/60139889009" target="_blank" rel="noopener noreferrer" className="wa-option" onClick={() => events.whatsappClick('float_popup')}>
                  <div className="wa-opt-icon"><WaIconSm /></div>
                  <div className="wa-opt-text">
                    <strong>+60 13-988 9009</strong>
                    <span><T en="Export Enquiries" zh="出口询盘" /></span>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            className="wa-btn"
            onClick={() => setOpen(o => !o)}
            aria-label="WhatsApp"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <WaIcon />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
