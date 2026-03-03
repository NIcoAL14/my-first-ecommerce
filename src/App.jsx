import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [showPromo, setShowPromo] = useState(true)

  const productsData = [
    {
      title: 'Producto 1',
      price: 29.99,
      description: 'Descripción del producto 1',
      imageUrl: 'https://picsum.photos/600/400?random=1',
    },
    {
      title: 'Producto 2',
      price: 49.99,
      description: 'Descripción del producto 2',
      imageUrl: 'https://picsum.photos/600/400?random=2',
    },
    {
      title: 'Producto 3',
      price: 19.99,
      description: 'Descripción del producto 3',
      imageUrl: 'https://picsum.photos/600/400?random=3',
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

      <div className="card-list">
        {productsData.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  )
}

export default App
