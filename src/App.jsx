import { useEffect, useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  }, [])

  return (
    <>
      {products.map(product => (
        <ProductCard
          key={product.id} // importante para evitar warnings en React
          title={product.title}
          price={product.price}
          description={product.description}
          imageUrl={product.images?.[0]} // la API devuelve un array de imágenes
        />
      ))}

      <ProductCard
        title="Zapatillas Running"
        price="120"
        description="Las mejores zapatillas"
        imageUrl="https://picsum.photos/600/400"
      />

      <ProductCard
        title="Reloj de Tiempo"
        price="200"
        description="El mejor reloj de Tiempo"
        imageUrl="https://picsum.photos/600/400?random=2"
      />
    </>
  )
}

export default App
