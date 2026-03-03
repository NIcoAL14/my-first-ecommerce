import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = (isAdded) => {
    if (isAdded === true) {
      setCartCount((count) => count + 1)
    }

    if (isAdded === false) {
      setCartCount((count) => count - 1)
    }
  }

  const value = { cartCount, handleAddToCart }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
