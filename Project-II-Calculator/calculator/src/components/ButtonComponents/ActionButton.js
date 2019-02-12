import React from 'react';
import './Button.css';


const ActionButton = () => {
    return (
      <div className='action'>
        <div className='clear'>
            <p>clear</p>
        </div>
        <div>
            <div className='actionBox actionbox1'>
                <p>/</p>
            </div>
            <div className='actionBox actionbox2'>
                <p>x</p>
            </div>
            <div className='actionBox actionbox3'>
                <p>-</p>
            </div>
            <div className='actionBox actionbox4'>
                <p>+</p>
            </div>
            <div className='actionBox actionbox5'>
                <p>=</p>
            </div>
        </div>
      </div>
    );
};
  
  export default ActionButton;