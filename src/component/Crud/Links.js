import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm'
import {db} from '../../firebase'
import './Tablas.estilos.css'
import {toast} from 'react-toastify'

const Links = ({handleLogout}) => {

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
    return(
    <div>
        <button onClick={handleLogout}>Cerrar sesión</button>
        <LinkForm {...{addOrEditLink, currentId, links}}/>
        {/* <div>
            <button onClick={HandleChange}>{x? 'Hide':'Show'}</button>
            {
                x && (<LinkForm {...{addOrEditLink, currentId, links}}/>)
            }
         <br/>
        </div> */}
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
                        <td>{link.tipoDocumentos}</td>
                        <td>{link.documento}</td>
                        <td>{link.nombre}</td>
                        <td className="chikito">{link.correo}</td>
                        <td>{link.telefono}</td>
                        <td>{link.direccion}</td>
                        <td>{link.sintomas}</td>
                        <td className="pequeño">{link.dosis}</td>
                        <td className="pequeño">{link.laboratorio}</td>
                        <td>
                            <button className="botonEditar" onClick={() => setCurrentId(link.id)}>
                                Lapiz</button>
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