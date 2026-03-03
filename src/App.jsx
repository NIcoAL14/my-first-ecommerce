import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [showPromo, setShowPromo] = useState(true)

  const productsData = [
    {
      id: '01',
      title: 'Zapatillas Running',
      price: 120,
      description: 'Las mejores zapatillas',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    },
    {
      id: '02',
      title: 'Reloj de Tiempo',
      price: 200,
      description: 'El mejor reloj de Tiempo',
      imageUrl: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c',
    },
    {
      id: '03',
      title: 'Mouse RGB',
      price: 100,
      description: 'El mejor mouse RGB',
    },
  ]

  const onClose = () => {
    setShowPromo(false)
  }

  const handleAddToCart = (isAdded) => {
    if (isAdded === true) {
      setCartCount((count) => count + 1)
    }
    if (isAdded === false) {
      setCartCount((count) => count - 1)
    }
  }

  return (
    <>
      <Header cartCount={cartCount} />
      {showPromo && <PromoBanner onClose={onClose} />}

      {/* Ahora delegamos la lista de productos al componente ProductList */}
      <ProductList productsData={productsData} handleAddToCart={handleAddToCart} />
    </>
  )
}

export default App
