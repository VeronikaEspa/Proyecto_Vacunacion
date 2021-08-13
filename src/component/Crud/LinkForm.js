import React, {useState, useEffect} from 'react'
import { db } from '../../firebase';
import './LinkForm.css'

 const LinkForm = (props) => {
     const initialStateValues ={
        documento: '',
        nombre: '',
        telefono:'',
        correo: '',
        direccion: '',
        sintomas: '',
        dosis: '',
        laboratorio: ''
     };
    const [values, setValues] = useState(initialStateValues);
    const handleSubmit = e =>{
    e.preventDefault();
    props.addOrEditLink(values);
    setValues({...initialStateValues})
    };
    const handleInputChange = e =>{
    const {name, value} = e.target;
    setValues({...values, [name]: value})
    };
    const getLinkById = async (id) => {
         const doc = await db.collection('links').doc(id).get();
         setValues({...doc.data()})
    }
    useEffect(() => {
         if(props.currentId === ''){
              setValues({...initialStateValues});
         }
         else{
              getLinkById(props.currentId)
         }
    }, [props.currentId]);
    return(
         <div className="naranja formulario margenesExternos">
         <form className="cardFormulario" onSubmit={handleSubmit}>
               <div className="padreInput textoInputs">
                    <label className="blancoLetra">Documento</label>
                    <select className=" inputs selectorDocumento" name="tipoDocumentos" value={values.tipoDocumentos} onChange={handleInputChange}>
                         <option value="" selected>Ingresar tipo de documento</option>
                         <option value="C.C">Cédula de ciudadania</option>
                         <option value="T.I">Tarjeta de identidad</option>
                         <option value="C.E">Cédula de extranjeria</option>
                         <option value="P.E.P">Permiso especial de permanencia</option>
                    </select>
                    <input
                    type="text"
                    className=" inputs inputTextoDocumento"
                    placeholder="Ingresar numero documento"
                    name="documento"
                    required
                    autocomplete="off"
                    onChange={handleInputChange}
                    value={values.documento}
                    />
               </div>
               <div className=" padreInput textoInputs">
                    <label className="blancoLetra">Dirección</label>
                    <input
                    type="text"
                    className="inputTexto inputs"
                    placeholder="Ingresar direccion"
                    name="direccion"
                    autocomplete="off"
                    required
                    onChange={handleInputChange}
                    value={values.direccion}
                    />
               </div>
               <div className="padreInput textoInputs">
                    <label className="blancoLetra">Nombre completo</label>
                    <input
                    type="text"
                    className="inputTexto inputs"
                    placeholder="Ingresar nombre completo"
                    name="nombre"
                    autocomplete="off"
                    required
                    onChange={handleInputChange}
                    value={values.nombre}
                    />
               </div>
               <div className=" padreInput textoInputs">
                    <label className="blancoLetra">Sintomatología</label>
                    <input
                    type="text"
                    autocomplete="off"
                    className="inputTexto inputs"
                    placeholder="Ingresar sintomas que presenta"
                    name="sintomas"
                    onChange={handleInputChange}
                    value={values.sintomas}
                    />
               </div>
               <div className="padreInput textoInputs">
                    <label className="blancoLetra">Correo electrónico</label>
                    <input
                    type="mail"
                    className="inputTexto inputs"
                    placeholder="Ingresar correo"
                    name="correo"
                    autocomplete="off"
                    onChange={handleInputChange}
                    value={values.correo}
                    />
               </div>
               <div className=" padreInput textoInputs">
                    <label className=" blancoLetra">Dosis</label>
                    <select className="selector inputs" name="dosis" value={values.dosis} onChange={handleInputChange}>
                         <option value="" selected>Dosis</option>
                         <option value="Ninguna">Ninguna</option>
                         <option value="Primera">Primera</option>
                         <option value="Segunda">Segunda</option>
                         <option value="Unica">Única</option>
                    </select>
               </div>
               <div className="padreInput textoInputs">
                    <label className="blancoLetra">Telefono</label>
                    <input
                    type="number"
                    className="inputTexto inputs"
                    placeholder="Ingresar telefono"
                    name="telefono"
                    autocomplete="off"
                    onChange={handleInputChange}
                    value={values.telefono}
                    />
               </div>
               <div className="padreInput textoInputs">
                    <label className="blancoLetra">Laboratorio</label>
                    <select className="selector inputs" name="laboratorio" value={values.laboratorio} onChange={handleInputChange}>
                         <option value="" selected>Laboratorio</option>
                         <option value="N/A">No aplica</option>
                         <option value="Pfizer">Pfizer</option>
                         <option value="Astrazeneca">Astrazeneca</option>
                         <option value="Sinovac">Sinovac</option>
                         <option value="J&J">Johnson & Johnson</option>
                         <option value="Moderna">Moderna</option>
                    </select>
               </div>
               <div></div>
            <button className=" botonFormGuardar grisFondo blancoLetra padreInput">
               {props.currentId === '' ? 'Guardar':'Editar'}
            </button>
        </form>
        </div>
    );
};
export default LinkForm;