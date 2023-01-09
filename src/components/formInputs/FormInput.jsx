import React from 'react'

const FormInput = (props) => {
  
  return (
    <div className="mb-3">
        <label 
        htmlFor="formGroupExampleInput" 
        className="form-label custom-label">{props.data.label}</label>
        <input 
        name={props.data.name}
        type={props.data.type} 
        className="form-control custom-input" 
        id="formGroupExampleInput" 
        required={props.data.required}
        onChange={props.catch} />
    </div>
  )
}

export default FormInput