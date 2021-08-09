import React from 'react';
import {ConfigLogin, Menu, Footer } from '../../component';
function Login() {
    return (
      <div className="Login">
        <>
        <Menu/>
        <ConfigLogin/>
        <Footer/>
        </>
     </div>
    );
  };
  export default Login;