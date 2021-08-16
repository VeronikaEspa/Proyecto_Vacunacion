import principal from '../../utils/img/Banner.png'
import './Banner.styles.css'

function Banner() {
    return (
      <>
      <section className="ContainerBanner negroFondo" id="Banner" name="Banner">
        <section className="infoBanner">
          <div className="parrafo">
            <p className="dosis naranjaLetra">Dosis de esperanza</p>
            <p className="cov grisLetra" >Contra</p>
            <p className="cov blancoLetra">Covid19</p>
          </div>
        <div className="imagenBanner">
          <img src={principal} alt="cargando..."/>
        </div>
        </section>
        <div className="consulta">
          <p className="blancoLetra" >Consulta tu priorización en "Mi vacuna" y asiste al Centro Comercial Bulevar</p>
        </div>
     </section>
     </>
    );
  }
  export default Banner;