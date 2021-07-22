import React from 'react';
import ReactDOM from 'react-dom';
import {Menu, Banner, InfoTapabocas, Slider, Footer } from '../../component/index.js';
import Estilos from "../../utils/css/Index.syles.css";
function Index() {
    return (
      <div className="Index">
        <>
        <Menu/>
        <Banner/>
        <InfoTapabocas/>
        <Slider/>
        <Footer/>
        <Estilos/>
        </>
     </div>
    );
  };
  
  export default Index;