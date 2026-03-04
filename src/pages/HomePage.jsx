import { useState } from 'react'
import PromoBanner from '../components/PromoBanner'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Container from '../components/Container'
import { productsAdapter } from '../adapters/products.adapter'
import ErrorMessage from '../components/ErrorMessage'

function HomePage() {
  const [showPromo, setShowPromo] = useState(true)
  const [errorProducts, setErrorProducts] = useState(false)

  const onClose = () => setShowPromo(false)

  return (
    <>
      <Header />
      {showPromo && <PromoBanner onClose={onClose} />}
      {errorProducts && <ErrorMessage message={'No se pudo cargar los productos'} />}
      <Container>
        <ProductList products={productsAdapter()} />
      </Container>
    </>
  )
}

export default HomePage
