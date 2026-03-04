import React from 'react'

// Promesa opcional para simular retraso
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const ProductDetailPage = React.lazy(() => import('./ProductDetailPage'))
export const AboutPage = React.lazy(() => import('./AboutPage'))
export const AddProductPage = React.lazy(() => import('./AddProductPage'))

// Ejemplo con retraso artificial en CartPage
export const CartPage = React.lazy(async () => {
  await delay(1000)
  return import('./CartPage')
})

// Export directo si quieres usar HomePage sin lazy
export { default as HomePage } from './HomePage'
