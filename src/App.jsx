import { useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Container from './components/Container'

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
    setCartCount((count) => (isAdded ? count + 1 : count - 1))
  }

  return (
    <>
      <Header cartCount={cartCount} />
      {showPromo && <PromoBanner onClose={onClose} />}

      <Container title="Productos disponibles">
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Estos son los productos que puedes comprar</p>
        <ProductList productsData={productsData} handleAddToCart={handleAddToCart} />
      </Container>

      <Container title="Productos sugeridos">
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Explora nuestra selección de productos</p>
        <ProductList productsData={productsData.slice(0, 2)} handleAddToCart={handleAddToCart} />
      </Container>
    </>
  )
}

export default App
