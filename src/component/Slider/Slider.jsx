import estetoscopio from "../../utils/img/Estetoscopio.png"
import corazon from "../../utils/img/Corazon.png"
import medicina from "../../utils/img/Medicina.png"
import medico from "../../utils/img/Medico.png"

function Slider() {
    return (
      <section className="ContainerSlider">
          <div className="Naranja"></div>
          <div className="ContainerTarjetas">
            <div className="tarjeta">
              <img src={estetoscopio} alt="Cargando..."/>
            </div>
            <div className="tarjeta">
              <img src={corazon} alt="Cargando..."/>
            </div>
            <div className="tarjeta">
              <img src={medicina} alt="Cargando..."/>
            </div>
            <div className="tarjeta">
              <img src={medico} alt="Cargando..."/>
            </div>
          </div>
     </section>
    );
  }
  
  export default Slider;