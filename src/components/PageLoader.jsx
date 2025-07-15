import './PageLoader.scss'
import Lottie from 'lottie-react'
import loading from '../assets/images/loading.json'

const PageLoader = () => {
  return (
    <div className="page-loader">
      <Lottie
        animationData={loading}
        loop
        autoplay
        style={{ width: 200, height: 200 }}
      />
    </div>
  )
}

export default PageLoader
