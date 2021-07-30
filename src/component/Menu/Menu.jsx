import logo from '../../utils/img/Logo.png'
import jeringa from '../../utils/img/Jeringa.png'
import pulso from '../../utils/img/Pulso.png'
import {Link} from "react-router-dom"
function Menu() {
    return (
    <>
      <section className="Container">
          {/*Contenido del menu*/}
        <section className="ContainerMenu">
        <div>
            {/* <Link to = "/"> */}
                <img src={logo} alt="Logo empresarial" />
            {/* </Link> */}
        </div>
        <div>
            <img src={jeringa} alt="cargando..."/>
        </div>
        <div className="Menu">
            <a href="./InfoTapabocas.jsx"><button>VACUNATE</button></a>
            <a href="./Slider.jsx"><button>BENEFICIOS</button></a>
            <a href="./InfoTapabocas.jsx"><button>CUIDADOS</button></a>
            <div>
                <img src={pulso} alt="cargando..." />
            </div>
            {/* <Link to = "/Login"> */}
                <button className="link" type="button">INICIAR SESIÓN</button>
            {/* </Link> */}
        </div>
        </section>
     </section>
     <styles/>
    </>
    );
  }
  export default Menu;