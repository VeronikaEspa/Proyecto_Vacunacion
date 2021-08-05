import React, {useEffect, useState} from "react";
import 'firebase/auth';
import firebase from 'firebase';
import Login from "./Login";

export const handleLogout = () => {
    firebase.auth().signOut();
};
 const ConfigLogin = () => {
    const [ user, setUser] = useState("");
    const [ email, setEmail ] = useState('');
    const [ password, setPassword] = useState('');
    const [ emailError, setEmailError] = useState('');
    const [ passwordError, setPasswordError] = useState('');
    const [ hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }
    const handleLogin = () => {
        clearErrors();
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res)=>{
            window.location.replace("/Tabla")
        })
        .catch((err)=>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break
            };
        });
    };
    const handleSignup = () => {
        // firebase
        // .auth()
        // .createUserWithEmailAndPassword(email, password)
        // .catch((err)=>{
        //     switch(err.code){
        //         case "auth/email-already-in-use":
        //         case "auth/invalid-email":
        //             setEmailError(err.message);
        //             break
        window.alert("Si no tiene una cuenta, contactarse con el encargado")
    };
    const authListener = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };
    useEffect(() => {
        authListener();
    }, []);
    return(
        <div>
            <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
                />
        </div>
   )
}
export default ConfigLogin;