import React, {useEffect, useState} from 'react'
import LinkForm from './LinkForm'
import {db} from '../firebase'
import '../utils/css/Tablas.estilos.css'
import {toast} from 'react-toastify'

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
    return(
    <div>
        <div>
            <LinkForm {...{addOrEditLink, currentId, links}}/>
        </div>
        <div className="acomodaTabla">
        <table className="tablaResultados">
                <thead>
                    <tr>
                        <th className="chikito2">#</th>
                        <th>Documento</th>
                        <th>Nombre completo</th>
                        <th>Telefono</th>
                        <th className="chikito2">Correo</th>
                        <th>Dirección</th>
                        <th>Sintomatología</th>
                        <th className="pequeño">Dosis</th>
                        <th className="pequeño">Laboratorio</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
            </table>
        {links.map(link => (
            <table className="tablaResultados">
                <tbody id="tabla">
                    <tr>
                        <td className="chikito">{link.id}</td>
                        <td>{link.documento}</td>
                        <td>{link.nombre}</td>
                        <td>{link.telefono}</td>
                        <td className="chikito">{link.correo}</td>
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
                </tbody>
            </table>
            ))}
        </div>
    </div>
    )
};
export default Links;