import { useState } from 'react'
import './ErrorMessage.css'

function ErrorMessage({ message }) {
  const [showError, setShowError] = useState(true)

  const onClose = () => {
    setShowError(false)
  }

  if (!message || !showError) return null

  return (
    <div className="error-message">
      <div className="error-content">
        <span className="error-icon">⚠️</span>
        <p>{message}</p>
        <button onClick={onClose} className="error-close-btn">
          ✕
        </button>
      </div>
    </div>
  )
}

export default ErrorMessage
