import React from "react";

function Button({value, className, onClick}) {
  return <button className={className} value={value} onClick={onClick}>{value}</button>;
}

export default Button;