import React from 'react'
import './Button.css';


function Button({type, name}) {
  return (
    <div>
        <button className='btn' type={type}>{name}</button>
    </div>
  )
}

export default Button