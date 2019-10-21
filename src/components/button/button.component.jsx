import React from "react";

const Button = ({ handleClick }) => {
  return (
    <button type="submit" onClick={handleClick}>
      Clone
    </button>
  );
};
export default Button;
