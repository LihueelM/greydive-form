import React from 'react'

const SelectInput = (props) => {
  return (
    <>
    <label 
    htmlFor={props.data.name}
    className='custom-label'>
      {props.data.label}    
    </label>  
    <select 
    className="form-select custom-input" 
    label={props.data.label}
    required={props.data.required}
    onChange={props.catch}
    name={props.data.name}
    >
      <option value=''></option>
      {
        props.data.options.map((option, i) =>{
          return(
            <option 
            value={option.value} 
            label={option.label}             
            key={i}
            required={option.required}
            >
            </option>
          )
        })        
      }
    </select>
    </> 
  )
}

export default SelectInput