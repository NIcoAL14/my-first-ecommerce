import { useState, useEffect } from 'react'
import './PromoBanner.css'

function PromoBanner({ onClose, defaultSeconds = 5 }) {
  const [visible, setVisible] = useState(true)
  // console.log('🎯 ~ PromoBanner ~ visible:', visible)  // Comentado para depuración opcional

  const [seconds, setSeconds] = useState(defaultSeconds)
  // console.log('🎯 ~ PromoBanner ~ seconds:', seconds)  // Comentado para depuración opcional

  useEffect(() => {
    if (!visible) return

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setVisible(false)
          onClose()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [visible, onClose])

  if (!visible) return null

  return (
    <div className="promo-banner">
      <p>🎉 Oferta especial disponible por {seconds} segundos 🎉</p>
      <button
        className="promo-close"
        onClick={() => {
          setVisible(false)
          onClose()
        }}
      >
        Cerrar
      </button>
    </div>
  )
}

export default PromoBanner
