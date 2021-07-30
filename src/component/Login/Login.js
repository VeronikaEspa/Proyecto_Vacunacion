import React from 'react';

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
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input
                type="text"
                autoFocus required
                value={email}
                onChange={(e) =>
                setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                type="password"
                required
                value={password}
                onChange={e =>
                setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ?(
                        <>
                        <button onClick={handleSignup}>Crea una cuenta</button>
                        <p>Si no tienes una cuenta, contacta con el encargado
                            <span onClick={() => setHasAccount(!hasAccount)}>Iniciar sesión</span>
                        </p>
                    </>
                    ) : (
                        <>
                            <button onClick={handleLogin}>Iniciar sesión</button>
                            <p>No tienes una 
                                <span onClick={() => setHasAccount(!hasAccount)}>Cuenta?</span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Login;