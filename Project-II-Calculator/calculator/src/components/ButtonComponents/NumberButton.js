import React from 'react';
import './Button.css';

const BasicButton = props => {<NumberButton className={`basicButtonStyles ${props.buttonStyles}`} />

}
BasicButton.defaultProps = {
    buttonStyles: 'white',
}


const NumberButton = props => {
    return (
    <button className = {`normalButton ${props.className} 
    basicButtonStyles ${props.buttonStyles}`}>
        {props.text}
    </button>
    );
};


export default NumberButton;
  
