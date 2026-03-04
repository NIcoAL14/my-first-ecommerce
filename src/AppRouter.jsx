import { Route, Routes } from 'react-router-dom'
import { AboutPage, AddProductPage, CartPage, HomePage } from './pages'
import routes from './routerConfig'

function AppRouter() {
  return (
    <Routes>
      {/* Rutas principales */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/add-product" element={<AddProductPage />} />
      <Route path="/cart" element={<CartPage />} />

      {/* Rutas adicionales desde routerConfig */}
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default AppRouter
