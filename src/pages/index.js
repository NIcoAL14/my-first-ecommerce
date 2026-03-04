import React from 'react'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import AddProductPage from './AddProductPage'
import CartPage from './CartPage'

export { HomePage, AboutPage, AddProductPage, CartPage }
export const AboutPage = React.lazy(() => import('./AboutPage'))
export const AddProductPage = React.lazy(() => import('./AddProductPage'))
export const CartPage = React.lazy(() => import('./CartPage'))

export { HomePage }
