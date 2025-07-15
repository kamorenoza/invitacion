import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect, useRef, useState } from 'react'
import './Photos.scss'
import Lottie from 'lottie-react'
import camera from '../assets/images/camera.json'
import { useLoader } from '../context/LoaderContext'
import foto1 from '@/assets/images/foto1.jpg'
import foto2 from '@/assets/images/foto2.jpg'
import foto3 from '@/assets/images/foto3.jpg'
import foto5 from '@/assets/images/foto5.jpg'
import foto6 from '@/assets/images/foto6.jpg'
import foto7 from '@/assets/images/foto7.jpg'
import foto8 from '@/assets/images/foto8.jpg'
import foto9 from '@/assets/images/foto9.jpg'
import foto10 from '@/assets/images/foto10.jpg'
import foto11 from '@/assets/images/foto11.jpg'
import foto12 from '@/assets/images/foto12.jpg'
import foto13 from '@/assets/images/foto13.jpg'

function Photos() {
  const timer = useRef()
  const [currentSlide, setCurrentSlide] = useState(0)
  const { showLoader, hideLoader } = useLoader()

  const images = [
    foto1,
    foto2,
    foto3,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13
  ]

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 3.5,
      spacing: 16,
      origin: 'center'
    },

    animation: {
      duration: 2000,
      easing: (t) => t
    },

    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1.2,
          spacing: 10,
          origin: 'center'
        }
      },
      '(min-width: 769px) and (max-width: 1024px)': {
        slides: {
          perView: 2.5,
          spacing: 10,
          origin: 'center'
        }
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(slider) {
      setCurrentSlide(slider.track.details.rel)
      startAutoPlay(slider)
    }
  })

  const startAutoPlay = (slider) => {
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      slider.next()
    }, 2000)
  }

  useEffect(() => {
    let loadedCount = 0

    images.forEach((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        if (loadedCount === images.length) {
          setTimeout(() => {}, 2000)
        }
      }
    })

    return () => clearInterval(timer.current)
  }, [])

  return (
    <>
      <div className="photos">
        <p className="general-title">Retratos de Nuestro Amor</p>
        <p className="general-subtitle">
          Un minuto, un segundo, un instante que queda en la eternidad
        </p>

        <div className="photos__icon">
          <Lottie
            animationData={camera}
            loop
            autoplay
            style={{ width: 200, height: 200 }}
          />
        </div>

        <div className="slider-container">
          <div ref={sliderRef} className="keen-slider image-slider">
            {images.map((src, i) => (
              <div className="keen-slider__slide" key={i}>
                <div className="photos__card-container">
                  <div className="photos__card">
                    <div
                      className="photos__image"
                      style={{ backgroundImage: `url(${src})` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={currentSlide === idx ? 'dot active' : 'dot'}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Photos
