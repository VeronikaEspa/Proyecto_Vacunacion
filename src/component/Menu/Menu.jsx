import logo from '../../utils/img/Logo.png'
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
        <div className="forja">
            <Link to="/">
                <img src={logo} alt="Logo empresarial" />
            </Link>
        </div>
        {/*<div>
            <img src={jeringa} alt="cargando..."/>
        </div> */}
        <div className="Menu ">
            <a href="./InfoTapabocas.jsx"><button className="naranja blancoLetra">VACUNATE</button></a>
            <a href="./Slider.jsx"><button className="naranja blancoLetra">BENEFICIOS</button></a>
            <a href="./InfoTapabocas.jsx"><button className="naranja blancoLetra">CUIDADOS</button></a>
        </div>    
        <div className="pulso">
            <img src={pulso} alt="cargando..." />
        </div>
        <Link to="/Login">
            <button className="link negroFondo Login" type="button">INICIAR SESIÓN</button>
        </Link>
        </section>
     </section>
    </>
    );
  }
  export default Menu;