import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FeedbackContainer from '../components/feedbackContainer/FeedbackContainer'
import FormContainer from '../components/formContainer/FormContainer'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<FormContainer />}/>
            <Route path='/feedback/:formId' element={<FeedbackContainer />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing