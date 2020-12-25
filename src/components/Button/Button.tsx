import React from "react";
import "./styles.css";

interface button {
  label: string;
  operation?: boolean;
  double?: boolean;
  triple?: boolean;
  click?: Function;
}

const Button = ({ label, operation, double, triple, click }: button) => {
  return (
    <button
      onClick={(e) => click && click(label)}
      className={`
    button 
    ${operation ? "operation" : ""}
    ${double ? "double" : ""}
    ${triple ? "triple" : ""}
  `}
    >
      {label}
    </button>
  );
};

export default Button;
