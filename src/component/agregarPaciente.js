// import React, {useState} from 'react'
// import '../utils/css/LinkForm.css'

// const agregarPaciente = (props) => {
//     const initialStateValues ={
//         documento: '',
//         nombre: '',
//         telefono:'',
//         correo: '',
//         direccion: '',
//         sintomas: '',
//         dosis: '',
//         laboratorio: ''
//     };
//     const [values, setValues] = useState(initialStateValues);
//    const handleSubmit = e =>{
//        e.preventDefault();
//        props.addOrEditLink(values);
//        setValues({...initialStateValues})
//    };
//    const handleInputChange = e =>{
//        const {name, value} = e.target;
//        setValues({...values, [name]: value})
//    };
//    return(
//        <form className="cardFormulario" onSubmit={handleSubmit}>
//            <input
//                 type="text"
//                 className=""
//                 placeholder="Ingresar documento"
//                 name="documento"
//                 onChange={handleInputChange}
//                 value={values.documento}
//            />
//            <input
//                 type="text"
//                 className=""
//                 placeholder="Ingresar nombre completo"
//                 name="nombre"
//                 onChange={handleInputChange}
//                 value={values.documento}
//            />
//            <input
//                 type="number"
//                 className=""
//                 placeholder="Ingresar telefono"
//                 name="telefono"
//                 onChange={handleInputChange}
//                 value={values.documento}
//            />
//            <input
//                 type="mail"
//                 className=""
//                 placeholder="Ingresar correo"
//                 name="correo"
//                 onChange={handleInputChange}
//                 value={values.documento}
//            />
//            <input
//                 type="text"
//                 className=""
//                 placeholder="Ingresar direccion"
//                 name="direccion"
//                 onChange={handleInputChange}
//                 value={values.documento}
//            />
//            <input
//                 type="text"
//                 className=""
//                 placeholder="Ingresar sintomas que tiene"
//                 name="sintomas"
//                 onChange={handleInputChange}
//                 value={values.documento}
//            />
//            <button className="">
//                Enviar
//            </button>
//        </form>
//    )
// };
// export default agregarPaciente;