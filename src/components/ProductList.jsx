import ProductCard from './ProductCard'

function ProductList({ productsData, handleAddToCart }) {
  return (
    <div className="card-list">
      {productsData.map((product, index) => (
        <ProductCard
          id={product.id}
          key={index}
          title={product.title}
          price={product.price}
          description={product.description}
          imageUrl={product.imageUrl}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList
