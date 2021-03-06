import React from 'react';
import enfermera from '../../utils/img/enfermera.png'
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
            <h2>Bienvenido</h2>
            <br>
            </br>
            <div className="input-div one focus">
                <div className="i">
                    <i className="fa fa-user"></i>
                </div>
                <div className="loginContainer">
                        <label className="labelLogin">Usuario: </label>
                        <input
                        className="inputBienvenido"
                        type="text"
                        autoFocus required
                        value={email}
                        onChange={(e) =>
                        setEmail(e.target.value)}
                        />
                        <p className="errorMsg">{emailError}</p>
                </div>
            </div>
            <div className="input-div two focus">
                <div className="i">
                </div>
                <div>
                        <label className="labelLogin">Contraseña: </label>
                        <input
                        className="inputBienvenido"
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
                        <p>Si no tienes una cuenta, contacta con el encargado.
                            <span className="botonesdelLoginCrearYIniciar" onClick={() => setHasAccount(!hasAccount)}><br/>Iniciar sesión</span>
                        </p>
                    </>
                    ) : (
                        <>
                            <button onClick={handleLogin} className="btn">Iniciar sesión</button>
                            <p>¿No tienes una
                                <span className="botonesdelLoginCrearYIniciar" onClick={() => setHasAccount(!hasAccount)}><br/> Cuenta?</span>
                            </p>
                        </>
                    )}
                </div>
    </div>
    </div>
    );
}
export default Login;