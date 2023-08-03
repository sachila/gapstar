import React, { useCallback } from 'react';
import './Counter.scss';
import CommonButton from './components/CommonButton';

function Counter() {
  const [count, setCount] = React.useState(0);

  const increase = useCallback(() => {
    if (count < 10) {
      setCount((counter) => counter + 1);
    } else {
      alert("Count can't be more than 10");
    }
  }, [count]);

  const decrease = useCallback(() => {
    if (count > 0) {
      setCount((counter) => counter - 1);
    } else {
      alert("Count can't be less than 0");
    }
  }, [count]);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className='container'>
      <span >Count: {count}</span>
      <div className='btn-container'>
        <CommonButton caption="Increase" handleOnClick={increase}></CommonButton>
        <CommonButton caption="Decrease" handleOnClick={decrease}></CommonButton>
        <CommonButton caption="Reset" handleOnClick={reset}></CommonButton>

      </div>
    </div>
  );
}

export default Counter;
