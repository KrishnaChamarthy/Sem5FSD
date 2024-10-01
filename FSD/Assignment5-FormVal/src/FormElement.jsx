import React from 'react'

const FormElement = ({label, value, onChange, className}) => {
  return (
    <div className='form-element'>
          <label>{label}</label>
          <input
            type="number"
            name="age"
            value={value}
            onChange={onChange}
            className={className}
          />
        </div>
  )
}

export default FormElement
