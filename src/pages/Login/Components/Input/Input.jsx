import React from "react";

import './Input.css';
const Input = ({nombre, attribute, handleChange}) => {
  return (
    <div className="input">
      <label>{nombre}</label>
      <input type="text"
        id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        type= {attribute.type}
        onChange={(e)=> handleChange(e.target.name, e.target.value)}
        className='regular-style'
      />
    </div>
  );
};

export default Input;
