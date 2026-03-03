import './Header.css'

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-logo">ShopStore</h1>
        <div className="header-cart">
          <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.29977 5H12L19 12H7.37671M20 16H6L3H9 20C20 20.5523 19 21 18 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
