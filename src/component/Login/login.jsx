import enfermera from '../../utils/img/enfermera.PNG'
import './login.styles.css'
function login() {
    return (
    <div class="container">
        <div class="img"> 
            <img src={enfermera} alt="cargando..."/>
        </div>

    <div className="login_container">
        <form action="login.jsx">        
            <h2>Bienvenido</h2>
            <br>
            </br>
            <div className="input-div one focus">
                <div className="i">
                    <i className="fa fa-user"></i>
                </div>
                <div>
                    <h5>Nombre de usuario</h5> 
                    <input className="input" type="text"></input>
                </div>
            </div>
            <a href="#">¿Aún no tiene cuenta? Cree una</a>
            <div className="input-div two">
                <div className="i">
                    <i className="fa fa-lock"></i>
                </div>
                <div>
                    <h5>Contraseña</h5> 
                    <input className="input" type="password"></input>
                </div>
            </div>
            <a href="#">¿Olvidó su contraseña?</a>
            <input type="submit" className="btn" value="login"></input>
        </form>
    </div>
    </div>
    );
}
 

export default login;