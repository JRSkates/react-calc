import React from "react";

function Button({value, className}) {
  return <button className={className} value={value}>{value}</button>;
}

export default Button;