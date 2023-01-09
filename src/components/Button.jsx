import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <button 
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} px-3 py-2 text-sm hover:drop-shadow-xl shadow-blue-500/50 `}
    >
      {text}
    </button>
  )
}

export default Button