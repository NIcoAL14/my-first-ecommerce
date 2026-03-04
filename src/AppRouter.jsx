import { Route, Routes } from 'react-router-dom'
import { AboutPage, AddProductPage, CartPage, HomePage } from './pages'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/add-product" element={<AddProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default AppRouter
