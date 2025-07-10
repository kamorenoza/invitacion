import { useEffect, useState } from 'react'
import './Counter.scss'

function Counter() {
  const targetDate = '2025-08-25T00:00:00'
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = new Date(targetDate) - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / (1000 * 60)) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="counter">
      <p className="counter__title">Falta</p>
      <div className="counter__group">
        <div className="counter__box">
          <p className="counter__number">{timeLeft.days}</p>
          <p className="counter__text">Días</p>
        </div>

        <div className="counter__box">
          <p className="counter__number">{timeLeft.hours}</p>
          <p className="counter__text">HS</p>
        </div>

        <div className="counter__box">
          <p className="counter__number">{timeLeft.minutes}</p>
          <p className="counter__text">MIN</p>
        </div>

        <div className="counter__box">
          <p className="counter__number">{timeLeft.seconds}</p>
          <p className="counter__text">SEG</p>
        </div>
      </div>
    </div>
  )
}

export default Counter
