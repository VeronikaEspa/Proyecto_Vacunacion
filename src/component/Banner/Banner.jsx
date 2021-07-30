import principal from '../../utils/img/Banner.png'
import './Banner.styles.css'

function Banner() {
    return (
      <>
      <section className="ContainerBanner negroFondo">
        <div>
          <div>
            <p>Dosis de esperanza</p>
            <p>Contra</p>
            <p>Coviv19</p>
          </div>
          <img src={principal} alt="cargando..."/>
        </div>
        <div>
          <p>Consulta tu priorización en "Mi vacuna" y asiste al centro Comercial Bulevar</p>
        </div>
     </section>
     </>
    );
  }




  export default Banner;