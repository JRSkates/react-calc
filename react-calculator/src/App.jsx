import React from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
import { useState } from "react";

function App() {
  const btnValues = [
    "C",
    "+-",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  // Define state and click handlers here
  const [calc, setCalc] = useState({
      sign: "", 
      num: 0,
      res: 0
  })

  return (
    <>
      <div className="wrapper">
        <Screen value={calc.num}/>
        <div className="buttonBox">
          {btnValues.map((value, index) => (
            <Button 
              key={index} 
              value={value} 
              className={value === "=" ? "equals" : ""}
            />
          ))} 
        </div>;
      </div>
    </>
  );
}

export default App;