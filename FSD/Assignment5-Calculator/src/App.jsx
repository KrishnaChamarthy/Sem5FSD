import React, { useState } from 'react';

const App = () => {
  const [value, setValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [prevValue, setPrevValue] = useState(null);

  const handleButtonClick = (ele) => {
    const ops = ["C", "+-", "%", "/", "X", "+", "-", "="];
    const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    if (ops.includes(ele)) {
      if (ele === "C") {
        setValue("0");
        setPrevValue(null);
        setOperator(null);
      } else if (ele === "+-") {
        setValue((prev) => (prev !== "0" ? (prev.charAt(0) === "-" ? prev.substring(1) : "-" + prev) : prev));
      } else if (ele === "=") {
        if (operator && prevValue !== null) {
          const current = parseFloat(value);
          const previous = parseFloat(prevValue);

          switch (operator) {
            case "+":
              setValue((previous + current).toString());
              break;
            case "-":
              setValue((previous - current).toString());
              break;
            case "X":
              setValue((previous * current).toString());
              break;
            case "/":
              setValue((previous / current).toString());
              break;
            case "%":
              setValue((previous % current).toString());
              break;
            default:
              break;
          }
          setPrevValue(null);
          setOperator(null);
        }
      } else {
        setOperator(ele);
        setPrevValue(value);
        setValue("0");
       }
    } else if (nums.includes(ele)) {
      setValue((prev) => (prev === "0" ? ele : prev + ele));
    } else if (ele === ".") {
      if (!value.includes(".")) {
        setValue(value + ".");
      }
    }
  };

  return (
    <div className='app'>
      <div className="calc-container">
        <div className="calc-inputs">
          <label className="input-bar">{value}</label>
        </div>
        <div className="calc-buttons">
          <button className='calc-button' onClick={() => handleButtonClick("C")}>C</button>
          <button className='calc-button' onClick={() => handleButtonClick("+-")}>+/-</button>
          <button className='calc-button' onClick={() => handleButtonClick("%")}>%</button>
          <button className='calc-button' onClick={() => handleButtonClick("/")}>/</button>
          <button className='calc-button' onClick={() => handleButtonClick("7")}>7</button>
          <button className='calc-button' onClick={() => handleButtonClick("8")}>8</button>
          <button className='calc-button' onClick={() => handleButtonClick("9")}>9</button>
          <button className='calc-button' onClick={() => handleButtonClick("X")}>X</button>
          <button className='calc-button' onClick={() => handleButtonClick("4")}>4</button>
          <button className='calc-button' onClick={() => handleButtonClick("5")}>5</button>
          <button className='calc-button' onClick={() => handleButtonClick("6")}>6</button>
          <button className='calc-button' onClick={() => handleButtonClick("-")}>-</button>
          <button className='calc-button' onClick={() => handleButtonClick("1")}>1</button>
          <button className='calc-button' onClick={() => handleButtonClick("2")}>2</button>
          <button className='calc-button' onClick={() => handleButtonClick("3")}>3</button>
          <button className='calc-button' onClick={() => handleButtonClick("+")}>+</button>
          <button className='calc-button' onClick={() => handleButtonClick("0")}>0</button>
          <button className='calc-button' onClick={() => handleButtonClick(".")}>.</button>
          <button className='calc-button equals' onClick={() => handleButtonClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
