import { createContext, useContext, useState, useCallback } from 'react'

const BasketContext = createContext()

export function BasketProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  const addItem = useCallback((item) => {
    setItems(prev => {
      const key = `${item.name}__${item.size || ''}`
      const existing = prev.find(i => `${i.name}__${i.size || ''}` === key)
      if (existing) {
        return prev.map(i =>
          `${i.name}__${i.size || ''}` === key
            ? { ...i, qty: i.qty + item.qty }
            : i
        )
      }
      return [...prev, { ...item, id: key }]
    })
  }, [])

  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const clearBasket = useCallback(() => setItems([]), [])

  const totalCount = items.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <BasketContext.Provider value={{ items, addItem, removeItem, clearBasket, totalCount, totalPrice, open, setOpen }}>
      {children}
    </BasketContext.Provider>
  )
}

export function useBasket() {
  return useContext(BasketContext)
}
