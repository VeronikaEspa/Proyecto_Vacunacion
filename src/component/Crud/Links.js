import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm'
import {db} from '../../firebase'
import firebase from 'firebase'
import './Tablas.estilos.css';
import "./HeaderCrud.estilos.css";
import {toast} from 'react-toastify'
import lapiz from '../../utils/img/lapiz-editar.svg'
import personaje from '../../utils/img/logoCrud.png'
// import SWal from 'sweetalert'
const Links = () => {

    const [links, setLinks] = useState([]);
    const[currentId, setCurrentId] = useState("");
    const addOrEditLink = async (LinkObjets) => {
        if (currentId === ""){
            await db.collection("links").doc().set(LinkObjets)
            toast('Usuario añadido con exito',{ //Para el coso verde al añadir
            type: 'success'
        });
        }
        else {
            await db.collection('links').doc(currentId).update(LinkObjets)
            toast('Actualizado información',{ //Para el coso verde al añadir
                type: 'info'
            });
            setCurrentId('')
        }
    };
    const onDeleteLink = async (id) => {
        if (window.confirm("¿Estas seguro de querer eliminar este usuario?")){
            await db.collection('links').doc(id).delete();
            toast('Usuario eliminado',{ //Para el coso verde al añadir
                type: "error",
                autoClose: 2000,
            });
        }
    }
    // const onDeleteLink = async (id) => {
    //     if (
    //         sweetAlert ({
    //             title: "Titulo",
    //             text: "Texto",
    //             icon: "warning",
    //             buttons: ["No", "Si"]
    //         }).then(respuesta => {
    //             if(respuesta==="Si"){
    //                await db.collection('links').doc(id).delete()
    //         }})
    //     );
    // };
    const getLinks = async() =>{
        db.collection("links")
        .onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
                console.log(docs)
        });
        setLinks(docs);
    });
}
    useEffect( () => {
        getLinks();
    }, []);
    function searchingTerm(term){
        return function(dager){
            return dager[filtro]?.toLowerCase().includes(term) || !term;
        }
    };
    const [data, setData] = React.useState([]);
    const [term, setTerm] = React.useState("");
    const [filtro, setFiltro] = React.useState("");
    React.useEffect(() => {
        setData(links);
    },[links])
    function cerrarSesion(boton){
        boton = document.getElementById("botonCerrarSesion");
        boton.classList.toggle("botonCerrarSesion");
    };
    function formularioInscripcion(formu){
        formu = document.getElementById("formulario");
        formu.classList.toggle("FormularioInscrip");
    };
    const salir = () => {
        firebase.auth().signOut()
        window.location.replace("/Login")
    };
    return(
    <div>
        <header className="menuCrud naranja">
        <button onClick={cerrarSesion} className="UsuarioNombre blancoFondo">
            <div className="botonBienvenidos alineaCentro">
                <h3>Bienvenidos</h3>
                <img src={personaje} className="imagenUsuario" alt="imagenPersonal"/>
            </div>
                <button className="botonCerrarSesion alineaCentro naranja blancoLetra" id="botonCerrarSesion" onClick={salir}>Cerrar sesión</button>
        </button>
        </header>
        <div className="encimaTabla">
            <button className="poppinSemibold añadirUsuario naranja blancoLetra" onClick={formularioInscripcion}>Añadir nuevo usuario</button>
            <div className="filtraryBuscarUsuario">
                <input
                        type="text"
                        className="poppinSemibold buscandoteQueridoUsuario"
                        placeholder="Buscar usuario en minuscula"
                        name="term"
                        onChange={e => setTerm(e.target.value)}
                        autocomplete="off"
                />
                <select onChange={e => setFiltro(e.target.value)} id="filtroSelect" className="poppinSemibold filtrarUsuario naranja blancoLetra" name="tipoFiltro">
                         <option selected>Filtrar</option>
                         <option value="documento">Documento</option>
                         <option value="nombre">Nombre</option>
                </select>
    </div>
        </div>
        <div className="FormularioInscrip" id="formulario">
        <LinkForm {...{addOrEditLink, currentId, links}}/>
        </div>
        <div className="acomodaTabla">
        <table className="tablaResultados" id="listaPacientes" className="listaPacientes">
                <thead className=" naranja blancoLetra encabezadoTabla">
                    <tr>
                        <th className="fila">Tipo</th>
                        <th className="fila">Documento</th>
                        <th className="fila">Nombre completo</th>
                        <th className="fila">Correo</th>
                        <th className="fila">Teléfono</th>
                        <th className="fila">Dirección</th>
                        <th className="fila">Sintomatología</th>
                        <th className="fila">Dosis</th>
                        <th className="fila">Laboratorio</th>
                        <th className="fila">Opciones</th>
                    </tr>
                    </thead>
                    <tbody id="tabla">
        {data.filter(searchingTerm(term)).map(link => (
                    <tr>
                        <td className="tamañoPequeño fila">{link.tipoDocumentos}</td>
                        <td className="tamañoMediano fila">{link.documento}</td>
                        <td className="tamañoGrande fila">{link.nombre}</td>
                        <td className="tamañoGrande fila">{link.correo}</td>
                        <td className="tamañoMediano fila">{link.telefono}</td>
                        <td className="tamañoMediano fila">{link.direccion}</td>
                        <td className="tamañoGrande fila">{link.sintomas}</td>
                        <td className="tamañoPequeño fila">{link.dosis}</td>
                        <td className="tamañoMediano fila">{link.laboratorio}</td>
                        <td className="botonesOpciones fila tamañoMediano">
                            <button className="botonEditar" onClick={() => setCurrentId(link.id)}>
                            <img src={lapiz} alt="Editar"/>
                            </button>
                            <button className="botonEliminar" onClick={() => onDeleteLink(link.id)}>X</button>
                        </td>
                    </tr>
            ))}
            </tbody>
            </table>
                <section className="listaResponsive" id="listaResponsive">
                {data.filter(searchingTerm(term)).map(link => (
                    <details>
                        <summary className="tarjetaUsuarios">
                            {link.nombre}
                        </summary>
                        <ol>
                            <li>{link.tipoDocumentos}</li>
                            <li>{link.documento}</li>
                            <li>{link.nombre}</li>
                            <li>{link.correo}</li>
                            <li>{link.telefono}</li>
                            <li>{link.direccion}</li>
                            <li>{link.sintomas}</li>
                            <li>{link.dosis}</li>
                            <li>{link.laboratorio}</li>
                        </ol>
                    </details>
                    ))}
                </section>
        </div>
    </div>
    )
};
export default Links;