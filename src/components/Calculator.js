import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Use caution with eval in real-world projects
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} placeholder="0" readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((btn, index) =>
          btn === "=" ? (
            <button key={index} onClick={calculate}>
              {btn}
            </button>
          ) : (
            <button key={index} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          )
        )}
        <button className="clear" onClick={clear}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
