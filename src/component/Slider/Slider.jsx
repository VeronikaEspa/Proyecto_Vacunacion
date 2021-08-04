import estetoscopio from "../../utils/img/Estetoscopio.png"
import corazon from "../../utils/img/Corazon.png"
import medicina from "../../utils/img/Medicina.png"
import medico from "../../utils/img/Medico.png"
import './Slider.styles.css'

function Slider() {
    return (
      <section className="ContainerSlider">
        <div className="vacunadaa"><p>VACUNATE</p></div>
          <section className="ContainerTarjetas naranja">
            <div className="tarjeta negroFondo">
              <img src={estetoscopio} alt="Cargando..."/>
            </div>
            <div className="tarjeta negroFondo">
              <img src={corazon} alt="Cargando..."/>
            </div>
            <div className="tarjeta negroFondo">
              <img src={medicina} alt="Cargando..."/>
            </div>
            {/*<div className="tarjeta">
              <img src={medico} alt="Cargando..."/>
            </div>  */}
          </section>
     </section>
    );
  }
  
  export default Slider;