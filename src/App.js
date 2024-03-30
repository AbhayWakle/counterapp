import React, { useState } from 'react';
import './App.css';




function App() {

  const [count, setCount] = useState(0);
  function decrementHandler() {
    setCount(count - 1);
    console.log(setCount);
  }
  function incrementHandler() {
    setCount(count + 1);
    console.log(setCount);
  }
  function resetHandller() {
    setCount(0);
  }

  return (
    <div className='wrapper'>
      <div>
        <div className='inc'>Increment & Decrement</div>
        <div className='middle'>
          <button className='buttons' onClick={decrementHandler}>
            -</button>
          <div>{count}</div>
          <button className='buttons' onClick={incrementHandler}>
            +</button>
        </div>
        <button onClick={resetHandller} className='reseter'>Reset</button>
      </div>
    </div>
  );
}

export default App;
