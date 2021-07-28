import {createGlobalStyle} from 'styled-components'
// import PrimaryFont from './utils/fonts/Spartan-Medium.ttf'
const GlobalStyles = createGlobalStyle `
html{ //Para que el scroll no sea de golpe
    scroll-behavior: smooth;
}
//Estilos del scroll
body::-webkit-scrollbar{
    width:15px;
    background-color: #8C1102;
}
body::-webkit-scrollbar-thumb{
    background-color: #FEAE4F;
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
// MARGEN CRUD
.margenesExternos{
    margin-left: 1%;
    margin-right: 1%;
}
// BOTONES
button{
    cursor: pointer;
}
// FUENTES
`
export default GlobalStyles;
