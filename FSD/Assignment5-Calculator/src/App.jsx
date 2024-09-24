import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

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
        <Display value={value}/>
        <div className="calc-buttons">
          <Button handleButtonClick={handleButtonClick} element={"C"}/>
          <Button handleButtonClick={handleButtonClick} element={"+-"}/>
          <Button handleButtonClick={handleButtonClick} element={"%"}/>
          <Button handleButtonClick={handleButtonClick} element={"/"}/>
          <Button handleButtonClick={handleButtonClick} element={"7"}/>
          <Button handleButtonClick={handleButtonClick} element={"8"}/>
          <Button handleButtonClick={handleButtonClick} element={"9"}/>
          <Button handleButtonClick={handleButtonClick} element={"X"}/>
          <Button handleButtonClick={handleButtonClick} element={"4"}/>
          <Button handleButtonClick={handleButtonClick} element={"5"}/>
          <Button handleButtonClick={handleButtonClick} element={"6"}/>
          <Button handleButtonClick={handleButtonClick} element={"-"}/>
          <Button handleButtonClick={handleButtonClick} element={"1"}/>
          <Button handleButtonClick={handleButtonClick} element={"2"}/>
          <Button handleButtonClick={handleButtonClick} element={"3"}/>
          <Button handleButtonClick={handleButtonClick} element={"+"}/>
          <Button handleButtonClick={handleButtonClick} element={"0"}/>
          <Button handleButtonClick={handleButtonClick} element={"."}/>
          <button className='calc-button equals' onClick={() => handleButtonClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
