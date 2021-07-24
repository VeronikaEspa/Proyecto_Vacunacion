import React from 'react';
import {Menu, Banner, InfoTapabocas, Slider, Footer } from '../../component';
function Home() {
    return (
      <div className="Home">
        <>
        <Menu/>
        <Banner/>
        <InfoTapabocas/>
        <Slider/>
        <Footer/>
        </>
     </div>
    );
  };
  export default Home;