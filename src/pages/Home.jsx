import { useEffect, useRef, useState } from 'react'
import './Home.scss'
import Details from '../components/Details'
import Counter from '../components/Counter'
import Photos from '../components/Photos'
import Indications from '../components/Indications'
import Gifts from '../components/Gifts'
import UploadPhotos from '../components/UploadPhotos'
import Footer from '../components/Footer'
import { useLoader } from '../context/LoaderContext'
import PageLoader from '../components/PageLoader'
import InitMessage from '../components/InitMessage'
import cancion from '@/assets/audio/music.mp3'

function Home() {
  const [showScrollIcon, setShowScrollIcon] = useState(true)
  const { loading, showLoader, hideLoader } = useLoader()
  const [showInfo, setShowInfo] = useState(false)
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAudio = () => {
    const audio = audioRef.current

    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play().catch(() => {})
    }

    setIsPlaying(!isPlaying)
  }

  const handlePlay = () => {
    audioRef.current.play()
  }

  useEffect(() => {
    showLoader()
    const handleScroll = () => {
      setShowScrollIcon(window.scrollY < 100)
    }

    if (audioRef.current) {
      audioRef.current.volume = 0.8
    }

    setTimeout(() => {
      hideLoader()
    }, 2500)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const onMusicSelect = () => {
    setShowInfo(true)
    handlePlay()
    setIsPlaying(true)
  }

  const onNotMusicSelect = () => {
    setShowInfo(true)
  }

  return (
    <div className={loading || !showInfo ? 'home loading' : 'home'}>
      <div
        onClick={toggleAudio}
        className={isPlaying ? 'sound-icon' : 'sound-icon not-sound'}
      >
        <div className="sound"></div>
      </div>

      <audio ref={audioRef} src={cancion} loop autoPlay hidden />

      {loading && <PageLoader />}

      {!loading && !showInfo && (
        <InitMessage onSelect={onMusicSelect} onNotSelect={onNotMusicSelect} />
      )}

      <>
        <section className="banner">
          <div className="banner__content">
            <p className="banner__date">25.08.2025</p>
            <p className="banner__names">
              Karen
              <span className="banner__and">&</span>
              Leo
            </p>
            <div className="banner__divider"></div>
            <div className="banner__message">
              <div className="banner__comilla-abre"></div>
              <p>
                El amor es lo único capaz de detener el tiempo, de volver eterno
                un instante, y de hacer de una sola mirada, un pacto sin
                palabras
              </p>
              <div className="banner__comilla-cierra"></div>
            </div>

            {showScrollIcon && <div className="banner__arrow"></div>}
          </div>
          <div className="banner__opacity"></div>
        </section>

        <section className="contenido">
          <Counter />
          <div className="home__divider"></div>
          <Details />
          <div className="home__divider"></div>
          <Photos />
          <div className="home__divider"></div>
          <Indications />
          <div className="home__divider"></div>
          <Gifts />
          <div className="home__divider"></div>
          <UploadPhotos />

          <Footer />
        </section>
      </>
    </div>
  )
}

export default Home
