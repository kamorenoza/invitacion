import './Details.scss'
import Lottie from 'lottie-react'
import ring from '../assets/images/ring.json'

function Details() {
  return (
    <div className="details">
      <Lottie
        animationData={ring}
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  )
}

export default Details
