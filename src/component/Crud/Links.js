import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm'
import {db} from '../../firebase'
import firebase from 'firebase'
import './Tablas.estilos.css';
import "./HeaderCrud.estilos.css";
import {toast} from 'react-toastify'
import lapiz from '../../utils/img/lapiz-editar.svg'
import {handleLogout} from '../Login/configLogin'
const Links = () => {

    const [links, setLinks] = useState([]);
    const[currentId, setCurrentId] = useState("");
    const addOrEditLink = async (LinkObjets) => {
        if (currentId === ""){
            await db.collection("links").doc().set(LinkObjets)
            toast('Nueva entrada',{ //Para el coso verde al añadir
            type: 'success'
        });
        }
        else {
            await db.collection('links').doc(currentId).update(LinkObjets)
            toast('Actualizado',{ //Para el coso verde al añadir
                type: 'info'
            });
            setCurrentId('')
        }
    };
    const onDeleteLink = async (id) => {
        if (window.confirm("estas seguro de querer eliminar este usuario?")){
            await db.collection('links').doc(id).delete();
            toast('Usuario eliminado',{ //Para el coso verde al añadir
                type: "error",
                autoClose: 2000,
            });
        }
    }
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
    // state = {
    //     divcontainer : false,
    // }
    // const HandleChange = e => {
    //     this.setState({divcontainer:!this.state.divcontainer});
    //     };
    // const x = this.state.divcontainer;



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
            <h3>Bienvenido, Juan Pablo Corredor</h3>
        <button className="botonCerrarSesion naranja blancoLetra" id="botonCerrarSesion" onClick={salir}>Cerrar sesión</button>
        </button>
        </header>
        <div className="encimaTabla">
            <button className="poppinSemibold añadirUsuario naranja blancoLetra" onClick={formularioInscripcion}>Añadir nuevo usuario</button>
            <div className="filtraryBuscarUsuario">
                <input
                        type="text"
                        className="buscarUsuario poppinSemibold"
                        placeholder="Buscar usuario"
                        name="usuario"
                        autocomplete="off"
                        />
                <select className="poppinSemibold filtrarUsuario naranja blancoLetra" name="filtro">
                         <option selected>Filtrar</option>
                         <option value="Documento">Documento</option>
                         <option value="Nombre">Nombre</option>
                         {/* <<https://youtu.be/yMKTRn_THeA  Ver ese video para hacer un checkbox en un select>> */}
                </select>
            </div>
        </div>
        <div className="FormularioInscrip" id="formulario">
        <LinkForm {...{addOrEditLink, currentId, links}}/>
        </div>
        <div className="acomodaTabla">
        <table className="tablaResultados">
                <thead className=" naranja blancoLetra encabezadoTabla">
                    <tr>
                        <th className="chikito2">Tipo</th>
                        <th>Documento</th>
                        <th>Nombre completo</th>
                        <th className="chikito2">Correo</th>
                        <th>Telefono</th>
                        <th>Dirección</th>
                        <th>Sintomatología</th>
                        <th className="pequeño">Dosis</th>
                        <th className="pequeño">Laboratorio</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody id="tabla">
        {links.map(link => (
                    <tr>
                        <td className="tamañoPequeño">{link.tipoDocumentos}</td>
                        <td className="tamañoMediano">{link.documento}</td>
                        <td className="tamañoGrande">{link.nombre}</td>
                        <td className="tamañoGrande">{link.correo}</td>
                        <td className="tamañoMediano">{link.telefono}</td>
                        <td className="tamañoMediano">{link.direccion}</td>
                        <td className="tamañoGrande">{link.sintomas}</td>
                        <td className="tamañoPequeño">{link.dosis}</td>
                        <td className="tamañoMediano">{link.laboratorio}</td>
                        <td className="botonesOpciones tamañoMediano">
                            <button className="botonEditar" onClick={() => setCurrentId(link.id)}>
                            <img src={lapiz} alt="Editar"/>
                            </button>
                            <button className="botonEliminar" onClick={() => onDeleteLink(link.id)}>X</button>
                        </td>
                    </tr>
            ))}
            </tbody>
            </table>
        </div>
    </div>
    )
};
export default Links;