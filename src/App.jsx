import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <>
      <ProductCard
        title="Zapatillas Runing"
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
