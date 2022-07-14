import React from "react";
import "./button.css";

const Button = ({text, onPress}) => {
  return (
    <div>
        <button onClick={onPress}> {text} </button>
    </div>
  )
}

export default Button