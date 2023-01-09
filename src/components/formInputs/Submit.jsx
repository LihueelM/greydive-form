import React from 'react'

const Submit = (props) => {
  return (
    <div>
        <input className='btn btn-primary' type={props.data.type} label={props.data.label} />
    </div>
  )
}
export default Submit