import { useEffect, useState } from 'react'
import './Home.scss'
import Details from '../components/Details'
import Counter from '../components/Counter'

function Home() {
  const [showScrollIcon, setShowScrollIcon] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIcon(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="home">
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
              Todos somos mortales, hasta el primer beso y la segunda copa de
              vino
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
      </section>
    </div>
  )
}

export default Home
