import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <>
      <ProductCard
        title="Zapatillas Runing"
        price="120"
        description="Las mejores zapatillas"
        imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <ProductCard
        title="Reloj de Tiempo"
        price="200"
        description="El mejor reloj de Tiempo"
        imageUrl="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <ProductCard title="Mouse RGB" price="100" description="El mejor mouse RGB" />
    </>
  )
}

export default App
