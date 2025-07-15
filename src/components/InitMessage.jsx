import './InitMessage.scss'

function InitMessage({ onSelect, onNotSelect }) {
  return (
    <div className="initMessage">
      <div className="initMessage__body">
        <p className="initMessage__title">
          Bienvenidos a la invitación de Karen & Leo
        </p>
        <p className="initMessage__subtitle">
          La música de fondo es parte de la experiencia, por favor asegúrate de
          subir el volumen
        </p>
        <div className="initMessage__buttons">
          <button onClick={onSelect} className="btn-general">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  )
}

export default InitMessage
