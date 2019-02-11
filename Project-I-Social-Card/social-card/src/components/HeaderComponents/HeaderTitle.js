import React from 'react';
import './Header.css';

const bullet = '\u2022';

var d = new Date();
var m = new Date();

var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

d.getDate();
m.getDate();

const HeaderTitle = () => {
    return (
        <h2 className = 'lambda'>Lambda School 
        <span> @LambdaSchool {bullet} {d.getDate()} {months[m.getMonth()]}</span>
        </h2>
         
        
    );
  };

  export default HeaderTitle;