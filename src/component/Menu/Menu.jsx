import logo from '../../utils/img/Logo.png'
import jeringa from '../../utils/img/Jeringa.png'
import pulso from '../../utils/img/Pulso.png'
import styles from './Menu.styles.css'
function Menu() {
    return (
    <>
      <section className="Container">
          {/*Contenido del menu*/}
        <section className="ContainerMenu">
        <div>
            <a href="../../App.js"><img src={logo} alt="cargando..." /></a>
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
            <a href=""><button>INICIAR SESIÓN</button></a>
        </div>
        </section>
     </section>
     <styles/>
    </>
    );
  }
  
  export default Menu;