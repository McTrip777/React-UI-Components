import React from 'react';
import './App.css';
import HeaderTitle from './components/HeaderComponents/HeaderTitle';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

const App = () => {
  return (
    <div>
      <div className = 'titleBody'>
          <ImageThumbnail />
        <div className = 'title'>
          <HeaderTitle />
          <HeaderContent />
        </div>
      </div>  
        <p>
          <strong>
            Don't forget to `default export` your components and import them here
            inside of this file in order to make them work.
          </strong>
        </p>
    </div>
  );
};

export default App;
