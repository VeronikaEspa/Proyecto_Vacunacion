import principal from '../../utils/img/Banner.png'

function Banner() {
    return (
      <>
      <section className="ContainerBanner">
        <div>
          <div>
            <p>Dosis de esperanza</p>
            <p>Contra</p>
            <p>Covid19</p>
          </div>
          <img src={principal} alt="cargando..."/>
        </div>
        <div>
          <p>Consulta tu priorización en "Mi vacuna" y asiste al centro Comercial</p>
        </div>
     </section>
     </>
    );
  }




  export default Banner;