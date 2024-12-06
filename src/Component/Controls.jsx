import React, { useRef } from 'react';
import DisplayConter from './DisplayCounter';
import { useDispatch } from 'react-redux';

const Controls = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleIncrement = () => dispatch({ type: 'Increment' });

  const handleDecrement = () => dispatch({ type: 'Decrement' });

  const handleAdd = () => {
    const value = parseInt(inputRef.current.value, 10);
    if (!isNaN(value)) {
      dispatch({ type: 'Add', payload: { num: value } });
      inputRef.current.value = ''; // Clear the input field
    } else {
      alert('Please enter a valid number.');
    }
  };

  const handleSubtract = () => {
    const value = parseInt(inputRef.current.value, 10);
    if (!isNaN(value)) {
      dispatch({ type: 'Substract', payload: { num: value } });
      inputRef.current.value = ''; // Clear the input field
    } else {
      alert('Please enter a valid number.');
    }
  };

  const handleReset = () => {
    dispatch({ type: 'Reset' });
    inputRef.current.value = ''; // Reset the input field
  };

  return (
    <div className="card-body btn_control">
      <DisplayConter />
      <div className="btn_control">
        <button className="btn btn-primary" onClick={handleIncrement}>+1</button>
        <button className="btn btn-success" onClick={handleDecrement}>-1</button>
      </div>
      <div className="btn_control">
        <input type="text" placeholder="Enter No here" ref={inputRef} />
        <button className="btn btn-danger" onClick={handleAdd}>Add</button>
        <button className="btn btn-warning" onClick={handleSubtract}>Subtract</button>
      </div>
      <button className="btn btn-dark" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Controls;
