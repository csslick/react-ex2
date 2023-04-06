import React from 'react'

export default function ColorButton(props) {
    console.log(props);
    
  return (
    <button 
        style={{
            background: props.color,
            padding: '5px',
            border: 'none',
            margin: '0 5px'
        }}
    >{props.text}</button>
  )
}
