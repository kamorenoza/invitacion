import './Footer.scss'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__names">
          <p className="footer__title">Karen & Leo</p>
        </div>
        <div className="footer__links">
          <a
            href="https://wa.me/573176834928?text=¡Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20celebración%20💍"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            style={{ width: '200px' }}
          >
            Confirmar asistencia con Karen
          </a>
          <a
            href="https://wa.me/573183889634?text=¡Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20celebración%20💍"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            style={{ width: '200px', marginTop: '10px' }}
          >
            Confirmar asistencia con Leo
          </a>

          <a
            href="https://forms.gle/7LoRffWxAvPrx1Ek7"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            style={{ width: '200px', marginTop: '10px' }}
          >
            Subir fotos
          </a>

          <a
            href="https://www.google.com/calendar/render?action=TEMPLATE&text=Celebraci%C3%B3n+matrimonio+Karen+%26+Leo💍&dates=20250825T180000/20250825T220000&details=Celebraci%C3%B3n+%C3%ADntima+para+compartir+una+noche+especial&location=Restaurante+La+Toscana,+Bucaramanga"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            style={{ width: '200px', marginTop: '10px' }}
          >
            Agendar evento
          </a>
        </div>
      </div>
      <p className="footer__end">Desarrollado con 🧡 por Karen & Leo</p>
    </>
  )
}

export default Footer
