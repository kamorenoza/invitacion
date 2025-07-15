import './Gifts.scss'
import Lottie from 'lottie-react'
import gifts from '../assets/images/gift.json'

function Gifts() {
  return (
    <div className="gifts">
      <p className="general-title">Regalos</p>
      <p className="general-subtitle">
        Si deseas regalarnos algo más que tu hermosa presencia...
      </p>
      <div className="gifts__icon">
        <Lottie
          animationData={gifts}
          loop
          autoplay
          style={{ width: 200, height: 200 }}
        />
      </div>
      <div className="gifts__text">
        <p className="btn-general">Lluvia de sobres</p>
      </div>
    </div>
  )
}

export default Gifts
