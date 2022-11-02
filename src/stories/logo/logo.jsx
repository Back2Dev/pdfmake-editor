import React from 'react'
import './logo.css'

const Logo = ({ color, backgroundColor, fontSize, text, ...props }) => {
  return (
    <div className="logo" style={backgroundColor &&{backgroundColor}}>
      <a href="/" style={color &&{color}}>
        <span style={fontSize &&{fontSize}}>{text}</span>
      </a>
    </div>
  )
}

export default Logo