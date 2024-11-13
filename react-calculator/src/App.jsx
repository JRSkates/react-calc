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

// Sign click handler
  function signClickHandler (e) {
    e.preventDefault();
    const typedValue = e.target.value;
    setCalc((prevCalc) => {
      console.log('sign click', typedValue);
      
      return {
        ...prevCalc,
        sign: typedValue,  // Store the operator (+, -, X, /)
        res: prevCalc.num,  // Store the current number in res
        num: "",  // Reset num to 0 after operator is clicked
      };
    });
  }
  
  // Number click handler
  function numClickHandler (e) {
    e.preventDefault();
    const typedValue = e.target.value;
    setCalc((prevCalc) => {
      let newNum;
  
      if (prevCalc.num === 0 && typedValue === '0') {
        newNum = '0';  // Don't allow multiple zeros to be entered
      } else if (prevCalc.num === 0) {
        newNum = typedValue;  // Start with the typed value if current num is 0
      } else {
        newNum = prevCalc.num + typedValue;  // Concatenate the typed value to num
      }
  
      const newRes = prevCalc.res;  // Keep the previous result (if any)
  
      console.log('num click', newNum);
      
      return {
        ...prevCalc,
        num: newNum,  // Update the number
        res: newRes,  // Keep the previous result
      };
    });
  }
  
  // Equals click handler
  function equalsClickHandler (e) {
    e.preventDefault();
    setCalc((prevCalc) => {
      if (prevCalc.sign && prevCalc.num) {
        let result;
  
        // Perform the calculation based on the sign
        switch (prevCalc.sign) {
          case '+':
            result = Number(prevCalc.res) + Number(prevCalc.num);
            break;
          case '-':
            result = Number(prevCalc.res) - Number(prevCalc.num);
            break;
          case 'X':
            result = Number(prevCalc.res) * Number(prevCalc.num);
            break;
          case '/':
            result = Number(prevCalc.res) / Number(prevCalc.num);
            break;
          default:
            result = 0;
        }
  
        console.log('calculated result', result);
  
        return {
          ...prevCalc,
          num: String(result),  // Update num with the result
          res: 0,  // Reset res to 0 after calculation
          sign: '',  // Clear the sign after calculation
        };
      } else {
        return prevCalc;
      }
    });
  }

  function cClickHandler (e) {
    e.preventDefault();
    setCalc((prevCalc) => {
      console.log('C click');
      return {
        sign: '',
        num: 0,
        res: 0,
      };
    });
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
              onClick={value === "C" ? cClickHandler : value === "=" ? equalsClickHandler : ["+", "-", "X", "/"].includes(value) ? signClickHandler : numClickHandler} // Bind numClickHandler to each button click event
            />
          ))} 
        </div>;
      </div>
    </>
  );
}

export default App;