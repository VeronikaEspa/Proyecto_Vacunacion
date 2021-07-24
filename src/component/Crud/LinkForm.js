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
         <div>
         <button onClick={}>Agregar paciente</button>
        <form className="cardFormulario" onSubmit={handleSubmit}>
            <select name="tipoDocumentos" value={values.tipoDocumentos} onChange={handleInputChange}>
               <option value="C.C" selected>Cedula de ciudadania</option>
               <option value="T.I">Tarjeta de identidad</option>
               <option value="extranjeria">Cedula de extranjeria</option>
            </select>
            <input
                type="text"
                className=""
                placeholder="Ingresar documento"
                name="documento"
                onChange={handleInputChange}
                value={values.documento}
           />
           <input
                type="text"
                className=""
                placeholder="Ingresar nombre completo"
                name="nombre"
                onChange={handleInputChange}
                value={values.nombre}
           />
           <input
                type="number"
                className=""
                placeholder="Ingresar telefono"
                name="telefono"
                onChange={handleInputChange}
                value={values.telefono}
           />
           <input
                type="mail"
                className=""
                placeholder="Ingresar correo"
                name="correo"
                onChange={handleInputChange}
                value={values.correo}
           />
           <input
                type="text"
                className=""
                placeholder="Ingresar direccion"
                name="direccion"
                onChange={handleInputChange}
                value={values.direccion}
           />
           <input
                type="text"
                className=""
                placeholder="Ingresar sintomas que tiene"
                name="sintomas"
                onChange={handleInputChange}
                value={values.sintomas}
           />
           <select name="dosis" value={values.dosis} onChange={handleInputChange}>
               <option value="Ninguna">Ninguna</option>
               <option value="Primera">Primera</option>
               <option value="Segunda">Segunda</option>
               <option value="Unica">Unica</option>
            </select>
           <input
                type="text"
                className=""
                placeholder="Ingresar laboratorio"
                name="laboratorio"
                onChange={handleInputChange}
                value={values.laboratorio}
           />
            <button className="">
               {props.currentId === '' ? 'Guardar':'Editar'}
            </button>
        </form>
        </div>
    )
};
export default LinkForm;