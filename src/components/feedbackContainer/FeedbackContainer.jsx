import React, { useEffect,  useState  } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const FeedbackContainer = () => {

  //Seteo el formulario a mostrar
  const [form, setForm] = useState({})
  //Utilizo useParams para filtrar el formulario que acaba de enviar el usuario
  const {formId} = useParams();

  //Uso el useEffect para poder renderizar el contenido del formulario
  useEffect(() => {
    const db = getFirestore()       
    const docRef =  doc(db,'forms', formId)
    getDoc(docRef)  
    .then(res => setForm({id: res.id , ...res.data()}))
} , [formId])


  return (
    <div className='feedback-container'>
      <h1 className='title'>Tus respuestas</h1>
      <div>
        <h3 className='label-feedback'>Nombre</h3>
        <p className='res-feedback'>{form.full_name}</p>
      </div>
      <div>
        <h3 className='label-feedback'>Email</h3>
        <p className='res-feedback'>{form.email}</p>
      </div>
      <div>
        <h3 className='label-feedback'>Fecha de nacimiento</h3>
        <p className='res-feedback'>{form.birth_date}</p>
      </div>
      <div>
        <h3 className='label-feedback'>Pais de origen</h3>
        <p className='res-feedback'>{form.country_of_origin}</p>          
      </div>
      <div>
        <h3 className='label-feedback'>Terminos y condiciones</h3>
        <p className='res-feedback'>{form.terms_and_conditions}</p>
      </div>

      
    </div>
  )
}

export default FeedbackContainer