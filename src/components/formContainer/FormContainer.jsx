import React, { useState } from 'react'
import Form from '../form/Form'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const FormContainer = () => {
    
    //Creo el estado de la data a guardar en firestore
    const [dataForm, setDataForm] = useState({})
    const navigate = useNavigate()

    //llamo a firestore para crear la coleccion forms donde se almacenaran los formularios enviados
    const saveForm = async (e) => {
        e.preventDefault()
        const db = getFirestore()
        const docRef = await addDoc(collection(db, 'forms'), dataForm )
        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado',
            text: 'Ver respuestas'                
          })   
    //redirijo al usuario hacia el feedback para corroborar el formulario. Se utiliza la id del formulario recien enviado como parametro
        .then(() => {
            navigate(`/feedback/${docRef.id}`)
        })   
    }
    //Seteo el formato del objeto que se guardara como formulario en firebase
    const catchData = async (e) => {
        const {name, value} = e.target
        setDataForm({...dataForm, [name]:value })        
    }     

    return (
        <div className='container-form' >
            <h1 className='title'>Greydive Form</h1>
            <form onSubmit={saveForm} >
                <Form catch={catchData} />
            </form>
        </div>
        
    )
}

export default FormContainer