import {createGlobalStyle} from 'styled-components'
import PoppinsBold from './utils/fonts/Poppins-Bold.woff'
import PoppinsLight from './utils/fonts/Poppins-Light.woff'
import PoppinsMedium from './utils/fonts/Poppins-Medium.woff'
import PoppinsRegular from './utils/fonts/Poppins-Regular.woff'
import PoppinsSemiBold from './utils/fonts/Poppins-SemiBold.woff'
const GlobalStyles = createGlobalStyle `
html{ //Para que el scroll no sea de golpe
    scroll-behavior: smooth;
}
//Estilos del scroll
body::-webkit-scrollbar{
    width:15px;
    background-color: #FFFFFF;
}
body::-webkit-scrollbar-thumb{
    background-color: #212529;
    border-radius: 30px;
}
// COLORES
.naranja{
    background-color: #CF703B;
}
.naranjaLetra{
    color: #CF703B;
}
.negroFondo{
    background-color: #212529;
}
.negroLetra{
    color: #212529;
}
.grisFondo{
    background-color: #5B5B5B;
}
.grisLetra{
    color: #5B5B5B;
}
.blancoFondo{
    background-color: #FFFFFF;
}
.blancoLetra{
    color: #FFFFFF;
}
// CRUD
// MARGEN CRUD
.margenesExternos{
    margin-left: 1%;
    margin-right: 1%;
}
// BOTON CERRAR SESION
#botonCerrarSesion{
    margin: 1%;
    margin-top: 2%;
    padding: 3%;
    width: 100%;
    border-radius: 30px;
    border: 1px solid #CF703B;
}
.alineaCentro{
    align-items: center;
    justify-content: center;
}
// BOTONES
button{
    cursor: pointer;
}
// FUENTES
@font-face {
    font-family: "poppins-light";
    src: local("poppins-light"), url(${PoppinsLight}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "poppins-regular";
    src: local("poppins-regular"), url(${PoppinsRegular}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "poppins-medium";
    src: local("poppins-medium"), url(${PoppinsMedium}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "poppins-semibold";
    src: local("poppins-semibold"), url(${PoppinsSemiBold}) format("woff");
    font-weight: normal;
}
@font-face {
    font-family: "poppins-bold";
    src: local("poppins-bold"), url(${PoppinsBold}) format("woff");
    font-weight: normal;
}
`
export default GlobalStyles;
