import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
      <a href="https://reactjs.org/ " target = "_blank" className="centerContainer">
        <CardBanner />
        <CardContent />
      </a>
    );
  }

  export default CardContainer;