import React from 'react'

const Button = ({handleButtonClick, element}) => {
  return (
   
      <button className='calc-button' onClick={() => handleButtonClick(element)}>{element}</button>
  )
}

export default Button
