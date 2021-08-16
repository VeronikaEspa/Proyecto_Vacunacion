import logo from '../../utils/img/Logo.png'
import logoPequeño from '../../utils/img/logoCrud.png'
import jeringa from '../../utils/img/Jeringa.png'
import pulso from '../../utils/img/Pulso.png'
import {Link} from "react-router-dom"
import './Menu.styles.css'
function Menu() {
    return (
    <>
      <section className="Container ">
          {/*Contenido del menu*/}
        <section className="ContainerMenu">
        <div className="forja logoGrande">
            <Link to="/">
                <img src={logo} alt="Logo empresarial" />
            </Link>
        </div>
        <div className="forja logoPequeño">
            <Link to="/">
                <img src={logoPequeño} alt="Logo empresarial" />
            </Link>
        </div>
        {/*<div>
            <img src={jeringa} alt="cargando..."/>
        </div> */}
        <div className="Menu ">
            <a href="#Banner"><button className="botonMenu naranja blancoLetra">VACUNATE</button></a>
            <a href="#InfoTapabocas"><button className="botonMenu naranja blancoLetra">CUIDADOS</button></a>
            <a href="#Slider"><button className="botonMenu naranja blancoLetra">BENEFICIOS</button></a>
        </div>
        <div className="pulso">
            <img src={pulso} alt="cargando..." />
        </div>
        <Link to="/Login">
            <button className="botonMenu link negroFondo botonLogin blancoLetra" type="button">INICIAR SESIÓN</button>
        </Link>
        </section>
     </section>
    </>
    );
  }
  export default Menu;