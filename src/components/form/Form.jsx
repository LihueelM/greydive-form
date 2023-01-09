import React from 'react'
import json from '../../db.json'
import FormInput from '../formInputs/FormInput'
import SelectInput from '../formInputs/SelectInput'
import CheckBoxInput from '../formInputs/CheckBoxInput'
import Submit from '../formInputs/Submit'

const Form = (props) => {  

    const data = json.items     
    const catchData = props.catch        

    return(
        <>
            {
                //Creo una nueva instancia por cada item dentro del array items y los filtro con un switch con parametro type                
                data.map((item , i) =>{
                    switch (item.type) {
                        case 'text':
                            return(
                                <FormInput key={i} data={item} catch={catchData} />
                            ) 
                        case 'email':
                            return(
                                <FormInput key={i} data={item} catch={catchData}/>
                            )
                        case 'date':
                            return(
                                <FormInput key={i} data={item} catch={catchData}/>
                            )
                        case 'select':
                            return(
                                <SelectInput key={i} data={item} catch={catchData}/>
                            ) 
                        case 'checkbox':
                            return(
                                <CheckBoxInput key={i} data={item} catch={catchData}/>
                            )   
                        case 'submit':
                            return(
                                <Submit key={i} data={item}/>
                            )                        
                    
                        default:
                            return(
                                'trabajo duro, como un esclavo'
                            )
                    }
                })
            }
        </>
    )
    


}

export default Form