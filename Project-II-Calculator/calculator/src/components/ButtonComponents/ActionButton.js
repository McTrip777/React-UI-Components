import React from 'react';
import './Button.css';


const ActionButton = () => {
    return (
      <div className='action'>
        <div className='actionBox actionbox1'>
        <p>clear</p>
      </div>
      <div className='actionBox actionbox2'>
        <p>/</p>
      </div>
      <div className='actionBox actionbox3'>
        <p>x</p>
      </div>
      <div className='actionBox actionbox4'>
        <p>-</p>
      </div>
      <div className='actionBox actionbox5'>
        <p>+</p>
      </div>
      <div className='actionBox actionbox6'>
        <p>=</p>
      </div>
      </div>
    );
};
  
  export default ActionButton;