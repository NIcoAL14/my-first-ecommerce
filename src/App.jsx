import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AddProductPage from './pages/AddProductPage'
import CartPage from './pages/CartPage'
import AppRouter from './AppRouter'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {/* Si AppRouter es un componente adicional, lo puedes dejar aquí */}
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
