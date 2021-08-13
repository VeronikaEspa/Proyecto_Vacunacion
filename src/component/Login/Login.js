import React from 'react';
import enfermera from '../../utils/img/enfermera.PNG'
import Usuario from '../../utils/img/user.png'
import pass from '../../utils/img/pass.png'
import './login.styles.css'

const Login = (props) => {

    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return(
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
                    <img src={Usuario} alt="cargando..."/>
                </div>
                <div className="loginContainer">
                        <label>Usuario: </label>
                        <input
                        type="text"
                        autoFocus required
                        value={email}
                        onChange={(e) =>
                        setEmail(e.target.value)}
                        />
                        <p className="errorMsg">{emailError}</p>
                </div>
            <div className="input-div two focus">
                <div className="i">
                    <img src={pass} alt="cargando..."/>
                    
                </div>
                <div>
                        <label>Contraseña: </label>
                        <input
                        type="password"
                        required
                        value={password}
                        onChange={e =>
                        setPassword(e.target.value)}
                        />
                        <p className="errorMsg">{passwordError}</p>
                </div>
            </div>
            <div className="btnContainer">
                    {hasAccount ?(
                        <>
                        <button onClick={handleSignup} className="a">Crea una cuenta</button>
                        <p>Si no tienes una cuenta, contacta con el encargado
                            <span onClick={() => setHasAccount(!hasAccount)}>Iniciar sesión</span>
                        </p>
                    </>
                    ) : (
                        <>
                            <button onClick={handleLogin} className="btn">Iniciar sesión</button>
                            <p>No tienes una
                                <span onClick={() => setHasAccount(!hasAccount)}> Cuenta?</span>
                            </p>
                        </>
                    )}
                </div>
    </div>
    </form>
    </div>
    </div>
    );
}
export default Login;