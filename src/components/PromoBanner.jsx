import { useEffect, useState } from 'react'
import './PromoBanner.css'

function PromoBanner({ onClose, defaultSeconds = 5 }) {
  const [visible, setVisible] = useState(true)
  console.log('~ PromoBanner ~ visible:', visible)
  const [seconds, setSeconds] = useState(defaultSeconds)
  console.log('~ PromoBanner ~ seconds:', seconds)

  useEffect(() => {
    if (!visible) return

    const interval = setInterval(() => {
      setSeconds((actualSeconds) => actualSeconds - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [visible])

  useEffect(() => {
    if (seconds === 0) {
      setVisible(false)
    }
  }, [seconds])

  if (visible === false) {
    return null
  }

  return (
    <div className="promo-banner">
      <span>Oferta por tiempo limitado: {seconds} segundos</span>
      <button className="promo-close" onClick={() => onClose()}>
        X
      </button>
    </div>
  )
}

export default PromoBanner
