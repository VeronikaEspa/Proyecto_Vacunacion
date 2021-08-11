import estetoscopio from "../../utils/img/Estetoscopio.png"
import corazon from "../../utils/img/Corazon.png"
import medicina from "../../utils/img/Medicina.png"
import medico from "../../utils/img/Medico.png"
import './Slider.styles.css'

function Slider() {
    return (
      <section className="ContainerSlider naranja" id="Slider" name="Slider">
        <section class="wrap naranja">
          <div class="tarjeta-wrap">
            <div class="tarjeta">
              <div class="adelante card1">
                <img src={estetoscopio} alt="Cargando..."/>
              </div>
              <div class="atras">
                <p>RESPONSABILIDAD<br />
                  Trabajamos con puntualidad y orden.
                  Tomamos la iniciativa, obramos con proactividad y diligencia
                  Asumimos nuestras responsabilidades con autonomía y disciplina.</p>
              </div>
            </div>
          </div>
          <div class="tarjeta-wrap">
            <div class="tarjeta">
              <div class="adelante card2">
                <img src={corazon} alt="Cargando..."/>
              </div>
              <div class="atras">
                <p>SERVICIO<br />
                  Somos amables y empáticos.
                  Nuestra vocación es vivir con amor y compasión.
                  Servir es la fuente de las más auténtica alegría</p>
              </div>
            </div>
          </div>
          <div class="tarjeta-wrap">
            <div class="tarjeta">
              <div class="adelante card3">
                <img src={medicina} alt="Cargando..."/>
              </div>
              <div class="atras">
                <p>INTEGRIDAD<br />
                  En la humildad germina nuestra mejor versión.
                  Actuamos con rectitud y honestidad.
                  Somos respetuosos y prudentes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
  
  export default Slider;