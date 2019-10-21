import React from "react";

const Input = ({ handleChange }) => {
  return (
    <input type="text" placeholder="Enter Company Id" onChange={handleChange} />
  );
};
export default Input;
