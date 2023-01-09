import React from 'react'

const CheckBoxInput = (props) => {

  return (
    
    <div className="form-check">
        <input 
        className="form-check-input" 
        type={props.data.type} 
        name={props.data.name} 
        id="flexCheckDefault" 
        required={props.data.required}
        onChange={props.catch} />
        <label className="form-check-label custom-label" htmlFor="flexCheckDefault">
            {props.data.label}
        </label>
    </div>
  )
}

export default CheckBoxInput