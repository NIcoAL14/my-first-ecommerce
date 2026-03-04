import { useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Container from './components/Container'
import { productsAdapter } from './adapters/products.adapter'
import Loader from './components/Loader'
import useFetch from './hooks/useFetch'

function App() {
  const [showPromo, setShowPromo] = useState(true)

  // Custom hooks para cada sección
  const { data: productsRawData, isLoading: isLoadingProducts } = useFetch(
    'https://api.escuelajs.co/api/v1/products?offset=0&limit=6',
  )
  const { data: suggestedRawData, isLoading: isLoadingSuggested } = useFetch(
    'https://api.escuelajs.co/api/v1/products?offset=6&limit=2',
  )
  const { data: snacksRawData, isLoading: isLoadingSnacks } = useFetch(
    'https://api.escuelajs.co/api/v1/categories/19/products?offset=0&limit=6',
  )

  // Adaptación de datos con productsAdapter
  const productsData = productsRawData ? productsRawData.map(productsAdapter) : []
  const productsSuggestedData = suggestedRawData ? suggestedRawData.map(productsAdapter) : []
  const productsSnacksData = snacksRawData ? snacksRawData.map(productsAdapter) : []

  const onClose = () => {
    setShowPromo(false)
  }

  return (
    <>
      <Header />
      {showPromo && <PromoBanner onClose={onClose} />}

      <Container title="Productos disponibles">
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Estos son los productos que puedes comprar</p>
        {isLoadingProducts ? <Loader /> : <ProductList productsData={productsData} />}
      </Container>

      <Container title="Productos sugeridos">
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Explora nuestra selección de productos</p>
        {isLoadingSuggested ? <Loader /> : <ProductList productsData={productsSuggestedData} />}
      </Container>

      <Container title="Productos snacks">
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Explora nuestra selección de snacks</p>
        {isLoadingSnacks ? <Loader /> : <ProductList productsData={productsSnacksData} />}
      </Container>
    </>
  )
}

export default App
