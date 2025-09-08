import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState(0);

  // Przeniesiona funkcja handleMathClick
  const handleMathClick = (type, value) => {
    console.log(type, value);
    // Funkcje anonimowe są wywoływane za każdym razem gdy klikamy przyciski
    let newResult
    if (type === "addition") {
      setCounter(counter + 1);
      newResult = result + value;
      setResult(newResult);
    } else if (type === "substraction") {
      setCounter(counter+ 1);
      newResult = result - value;
      setResult(newResult);
    } else if (type === "reset") {
      setCounter(0);
      setResult(0);
      return;
    }
    
    // Zauważ, że setResult zostanie wykonane z opóźnieniem
    // ze względu na asynchroniczny charakter setCounter
    
    
  };

  const ResultPanel = props => {
    return (
      <div>
        <h2>Counter click: {counter}</h2>
        <h2>Result: {result}</h2>
      </div>
    );
  };

  const MathButton = ({ name, value, type }) => {
    const numberValue = parseInt(value);
    return (
      <button onClick={() => handleMathClick(type, numberValue)}>{name}</button>
    );
  };

  const Counter = props => {
    return (
      <div className="counter">
        <h1>React Counter</h1>
        
        <MathButton
          name="-10"
          value="10"
          type="substraction"
        />

        <MathButton
          name="-5"
          value="5"
          type="substraction"
        />

        <MathButton
          name="reset"
          value="reset"
          type="reset"
        />
        
        <MathButton
          name="+5"
          value="5"
          type="addition"
        />

        <MathButton
          name="+10"
          value="10"
          type="addition"
        />
        
        <ResultPanel result={result} />
      </div>
    );
  };

  return (
    <>
      <Counter />
    </>
  );
}

export default App;