import React from 'react'

// Utilidad para simular retraso opcional
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Exportación directa (sin lazy) para HomePage
export { default as HomePage } from './HomePage'

// Exportaciones con React.lazy (lazy loading)
export const AboutPage = React.lazy(() => import('./AboutPage'))
export const AddProductPage = React.lazy(() => import('./AddProductPage'))

// Ejemplo con retraso artificial de 2 segundos en CartPage
export const CartPage = React.lazy(async () => {
  await delay(2000)
  return import('./CartPage')
})
