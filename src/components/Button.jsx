import React from "react";

const Button = ({text, onPress}) => {
  return (
    <div>
        <button onClick={onPress}> {text} </button>
    </div>
  )
}

export default Button