import React from "react";
import "./input.css";

const Input = ({value, onChange, type, placeholder, name}) => {
  return (
    <div>
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange = {onChange} 
            name = {name}
        />
    </div>
  );
};

export default Input;