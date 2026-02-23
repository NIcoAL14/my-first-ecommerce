import './ProductCard.css'

function ProductCard({title, price, description, imageUrl}) {
  return (
    /* Create Product Card HTML */
    <div id="card-01" className="card">
      <img 
        src={imageUrl}
        alt={title}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">
          {description}
        </p>
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className="card-button">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
