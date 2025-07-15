import './Details.scss'
import Lottie from 'lottie-react'
import rings from '../assets/images/rings.json'
import copas from '../assets/images/copas.json'

function Details() {
  return (
    <div className="details">
      <div className="details__card">
        <Lottie
          animationData={rings}
          loop
          autoplay
          style={{ width: 200, height: 200 }}
        />

        <div className="details__title">
          <p>Ceremonia civil</p>
        </div>

        <div className="details__data">
          <p className="details__subtitle">Día</p>
          <p className="details__text">Lunes 25 de Agosto del 2025</p>
        </div>

        <div className="details__data">
          <p className="details__subtitle">Hora</p>
          <p className="details__text">4:30pm</p>
        </div>

        <div className="details__data">
          <p className="details__subtitle">Lugar</p>
          <p className="details__text">Notaria 8 de Bucaramanga</p>
        </div>

        <div className="details__data">
          <p className="details__subtitle">Dirección</p>
          <p className="details__text">
            Cra. 35A #48-47, Cabecera del llano, Bucaramanga, Santander
          </p>
        </div>

        <a
          href="https://maps.app.goo.gl/tGkbgLcrwXsKiU8Q7"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-general"
        >
          Ver ubicación
        </a>
      </div>

      <div className="details__card details__second-column">
        <Lottie
          animationData={copas}
          loop
          autoplay
          style={{ width: 200, height: 200 }}
        />

        <div className="details__title">
          <p>Cena</p>
        </div>

        <div className="details__data">
          <p className="details__subtitle">Día</p>
          <p className="details__text">Lunes 25 de Agosto del 2025</p>
        </div>

        <div className="details__data">
          <p className="details__subtitle">Hora</p>
          <p className="details__text">6:00pm</p>
        </div>

        <div className="details__data">
          <p className="details__subtitle">Lugar</p>
          <p className="details__text">Restaurante La Toscana</p>
        </div>

        <div className="details__data">
          <p className="details__subtitle">Dirección</p>
          <p className="details__text">
            Av. El Jardín #1, Bucaramanga, Santander
          </p>
        </div>

        <a
          href="https://maps.app.goo.gl/HZAnmFuf3Y5do8bd8"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-general"
        >
          Ver ubicación
        </a>
      </div>
    </div>
  )
}

export default Details
