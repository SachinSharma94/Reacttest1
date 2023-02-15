import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function handleDecrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const counterColor = count === 10 ? 'red' : count >= 5 ? 'blue' : 'green';
  
  return (
    <div>
      <h1 style={{ color: counterColor }}>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
    
  );
}

export default Counter;
