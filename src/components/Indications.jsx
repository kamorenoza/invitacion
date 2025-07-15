import './Indications.scss'
import tips from '@/assets/images/tips.svg'
import dresscode from '@/assets/images/dresscode.svg'

function Indications() {
  return (
    <div className="indications">
      <p className="general-title">Importante...</p>
      <p className="general-subtitle">
        Aquí algunos detalles a tener en cuenta.
      </p>

      <div className="indications__container">
        <div className="indications__card">
          <p className="indications__title">Notas</p>
          <div className="indications__icon">
            <img src={tips} alt="tips" />
          </div>
          <p className="indications__text">
            La ceremonia civil será un momento íntimo con espacio limitado, por
            lo que solo podrán acompañarnos nuestros padres y hermanos.
          </p>
          <p className="indications__text">
            Pero nos haría muy felices sentir tu cariño al salir… o encontrarnos
            después para celebrar juntos en el restaurante.
          </p>
        </div>

        <div className="indications__card">
          <p className="indications__title">Vestuario</p>
          <div className="indications__icon">
            <img src={dresscode} alt="dresscode" />
          </div>
          <p className="indications__text">
            Nos encantará verte con algo que refleje tu esencia. Semiformal, con
            libertad para sentirte cómodo.
            <br></br>
            <span>(No usar blanco — está reservado para la novia 🤍)</span>
          </p>
        </div>

        <div className="indications__card">
          <p className="indications__title">Confirma tu asistencia</p>
          <div className="indications__icon">
            <img src={tips} alt="tips" />
          </div>
          <p className="indications__text">
            Por favor, no olvides confirmar tu asistencia. Nos encantará saber
            que estarás con nosotros en este día tan especial.
          </p>
          <div>
            <a
              href="https://wa.me/573176834928?text=¡Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20celebración%20💍"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-general"
              style={{ width: '200px' }}
            >
              Confirmar con Karen
            </a>
            <a
              href="https://wa.me/573183889634?text=¡Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20celebración%20💍"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-general"
              style={{ width: '200px', marginTop: '10px' }}
            >
              Confirmar con Leo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Indications
