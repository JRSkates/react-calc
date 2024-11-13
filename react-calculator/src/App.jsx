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

  function numClickHandler (e) {
    const typedValue = e.target.value
    setCalc((prevCalc) => {
      let newNum;
      if (prevCalc.num === 0 && typedValue === 0) {
        newNum = 0;  // Don't allow multiple zeros to be entered
      } else if (prevCalc.num === 0) {
        newNum = typedValue;  // Start with the typed value if current num is 0
      } else {
        newNum = prevCalc.num + typedValue;  // Concatenate the typed value to num
      }

      const newRes = prevCalc.sign ? prevCalc.sign : 0;

      return {
        ...prevCalc,
        num: newNum,
        res: newRes,
      };
    })
  }

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
              onClick={numClickHandler}  // Bind numClickHandler to each button click event
            />
          ))} 
        </div>;
      </div>
    </>
  );
}

export default App;