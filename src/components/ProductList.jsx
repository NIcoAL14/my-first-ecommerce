import ProductCard from './ProductCard'
import './ProductList.css'

function ProductList({ productsData }) {
  return (
    <div className="card-list">
      {productsData.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  )
}

export default ProductList
