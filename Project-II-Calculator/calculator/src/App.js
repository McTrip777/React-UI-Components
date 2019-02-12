import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';



const App = () => {
  return (
    <div className='container'>
      <CalculatorDisplay />
      <div className='section'>
        <ActionButton text='clear'/>
        <NumberButton className='buttonStyles' text='/'/>
      </div>
      <div className='section'>
        <NumberButton text='7'/>
        <NumberButton text='8'/>
        <NumberButton text='9'/>
        <NumberButton className='buttonStyles' text='x'/>
      </div>
      <div className='section'>
        <NumberButton text='4'/>
        <NumberButton text='5'/>
        <NumberButton text='6'/>
        <NumberButton className='buttonStyles' text='-'/>
      </div>
      <div className='section'>
        <NumberButton text='1'/>
        <NumberButton text='2'/>
        <NumberButton text='3'/>
        <NumberButton className='buttonStyles' text='+'/>
      </div>
      <div className='section'>
        <ActionButton text='0'/>
        <NumberButton className='buttonStyles' text='='/>
      </div>  
    </div>
  );
};

export default App;
