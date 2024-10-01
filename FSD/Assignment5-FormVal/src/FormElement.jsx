import React from 'react'

const FormElement = ({label, value, onChange, className, name}) => {
  return (
    <div className='form-element'>
          <label>{label}</label>
          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className={className}
          />
        </div>
  )
}

export default FormElement
