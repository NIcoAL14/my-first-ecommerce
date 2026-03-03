import { useState } from 'react'
import './ProductCard.css'

function ProductCard({ title, price, description, imageUrl = 'https://picsum.photos/600/400', handleAddToCart }) {
  const [isAdded, setIsAdded] = useState(false)
  console.log('isAdded', isAdded)

  const handleClick = () => {
    setIsAdded((prev) => !prev)
    handleAddToCart(!isAdded)
  }

  return (
    <div id="card-01" className="card">
      <img src={imageUrl} alt={title} className="card-image" />

      <div className="card-footer">
        <span className="card-price">${price}</span>
        <button className={`card-button ${isAdded ? 'added' : ''}`} onClick={handleClick}>
          {isAdded ? 'Agregado' : 'Agregar'}
        </button>
      </div>
    </div>
  )
}

export default ProductCard
