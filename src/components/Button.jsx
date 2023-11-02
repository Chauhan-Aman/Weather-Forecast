import React from "react";

const Button = (props) => {
  return (
    <button className={`button ${props.value === 'Search' ? 'search' : ''}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
