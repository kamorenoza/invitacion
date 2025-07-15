import './UploadPhotos.scss'
import Lottie from 'lottie-react'
import camera from '../assets/images/camera.json'

function UploadPhotos() {
  return (
    <div className="uploadPhotos">
      <p className="general-title">Compartamos este día juntos...</p>
      <p className="general-subtitle">
        Comparte tus fotos y videos de ese hermoso día
      </p>
      <div className="photos__icon">
        <Lottie
          animationData={camera}
          loop
          autoplay
          style={{ width: 200, height: 200 }}
        />
      </div>
      <div className="uploadPhotos__button">
        <a
          href="https://forms.gle/7LoRffWxAvPrx1Ek7"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-general"
        >
          Subir fotos
        </a>
      </div>
    </div>
  )
}

export default UploadPhotos
