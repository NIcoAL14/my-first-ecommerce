import { useState } from 'react'
import './ProductCard.css'

function ProductCard({ id, title, price, description, imageUrl = 'https://picsum.photos/600/400', handleAddToCart }) {
  const [isAdded, setIsAdded] = useState(false)
  // console.log('isAdded', isAdded)  // Comentado para depuración opcional

  const handleClick = () => {
    setIsAdded((prev) => !prev)
    handleAddToCart(!isAdded)
  }

  return (
    <div id={`card-${id}`} className="card">
      <img src={imageUrl} alt={title} className="card-image" />

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>

        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className={`card-button ${isAdded ? 'added' : ''}`} onClick={handleClick}>
            {isAdded ? 'Agregado' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
