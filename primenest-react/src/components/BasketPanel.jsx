import { motion, AnimatePresence } from 'framer-motion'
import { useBasket } from '../contexts/BasketContext'
import { T } from '../contexts/LangContext'

export default function BasketPanel() {
  const { items, removeItem, clearBasket, totalCount, totalPrice, open, setOpen } = useBasket()

  function buildWhatsAppMsg() {
    if (!items.length) return ''
    const lines = items.map(i => `• ${i.name}${i.size ? ` (${i.size})` : ''} × ${i.qty} kg — RM ${(i.price * i.qty).toLocaleString()}`)
    return encodeURIComponent(
      `Hello PrimeNest Global,\n\nI would like to request a wholesale quote for the following:\n\n${lines.join('\n')}\n\nTotal: RM ${totalPrice.toLocaleString()}\n\nPlease advise on availability and delivery.`
    )
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="basket-overlay open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="basket-panel"
        initial={{ x: '100%' }}
        animate={{ x: open ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 32 }}
        aria-hidden={!open}
      >
        <div className="basket-panel__head">
          <span className="basket-panel__title"><T en="Order Basket" zh="询价清单" /></span>
          <button className="basket-panel__close" onClick={() => setOpen(false)} aria-label="Close basket">×</button>
        </div>

        <div className="basket-panel__body">
          {items.length === 0 ? (
            <p className="basket-empty"><T en="Your basket is empty." zh="清单为空。" /></p>
          ) : (
            items.map(item => (
              <div key={item.id} className="basket-item">
                <div className="basket-item__info">
                  <div className="basket-item__name">{item.name}</div>
                  {item.size && <div className="basket-item__size">{item.size}</div>}
                  <div className="basket-item__detail">
                    {item.qty} kg × RM {item.price.toLocaleString()}/kg
                  </div>
                </div>
                <span className="basket-item__total">RM {(item.price * item.qty).toLocaleString()}</span>
                <button
                  className="basket-item__remove"
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove item"
                >×</button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="basket-panel__foot">
            <div className="basket-total-row">
              <span className="basket-total-label"><T en="Estimated Total" zh="预估总价" /></span>
              <span className="basket-total-value">RM {totalPrice.toLocaleString()}</span>
            </div>
            <a
              href={`https://wa.me/601172287202?text=${buildWhatsAppMsg()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-request-quote"
              onClick={() => setOpen(false)}
            >
              <T en="Request Quote via WhatsApp" zh="WhatsApp 发送询价" />
            </a>
            <button className="basket-clear" onClick={clearBasket}>
              <T en="Clear basket" zh="清空清单" />
            </button>
          </div>
        )}
      </motion.div>
    </>
  )
}
