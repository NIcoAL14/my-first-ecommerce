import { Link } from 'react-router-dom'
import './NotFoundPage.css'

function NotFoundPage() {
  return (
    <section className="not-found">
      <span className="not-found__icon">🚀</span>
      <h1 className="not-found__code">404</h1>
      <h2 className="not-found__title">Página no encontrada</h2>
      <hr className="not-found__divider" />
      <p className="not-found__message">
        ¡Ups! Parece que esta página se perdió en el espacio. La dirección que buscas no existe o fue movida.
      </p>
      <Link to="/" className="not-found__link">
        ← Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage
