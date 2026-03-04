import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './ProductCard.css'
import { Link } from 'react-router-dom'

function ProductCard({ id, title, price, description, imageUrl = 'https://picsum.photos/600/400' }) {
  const { handleAddToCart } = useContext(CartContext)

  return (
    <div id={`card-${id}`} className="product-card">
      <Link to={`/product/${id}`}>
        <img src={imageUrl} alt={title} className="card-image" />
      </Link>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <p className="card-price">${price}</p>
        <button className="card-link" onClick={() => handleAddToCart({ id, title, price, imageUrl })}>
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard
