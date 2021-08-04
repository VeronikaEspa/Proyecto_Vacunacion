import tapabocas from '../../utils/img/Tapabocas.png'
import rayas from '../../utils/img/Lineas.png'
import './Info.styles.css'
function InfoTapabocas() {
    return (
      <>
      <section className="ContainerTapabocas">
          <div className="tapabocas">
            <img src={tapabocas} alt="cargando..."/>
          </div>
          <div className="informacion">
            <p>¿Cómo debe usar Tapabocas?</p>
            <ul>
              <li>Lava tus manos, ten en cuenta que el tapabocas debe cubrir la nariz y boca</li>
              <li>El lado blanco deberá ir hacía adentro y el azul hacía afuera</li>
              <li>Deberás ajustarlo para que quede adherido a la cara</li>
              <li>Deberás cambiarlo, si se humedece con secreciones.</li>
            </ul>
          </div>
          <div className="rayas">
            <img src={rayas} alt="cargando"/>
          </div>
     </section>
     </>
    );
  }




  export default InfoTapabocas;