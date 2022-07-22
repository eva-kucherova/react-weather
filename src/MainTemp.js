import React from 'react';
import './MainTemp.css';
export default function MainTemp() {
  return (
    <div className='MainTemp'>
      <h2 className='central-header'>And now in City</h2>
      <div className='weather'>
        <span>Sunny</span>
        <div>
          <span className='main-icon'>🌞</span>
          <span className='main-temp'>23°</span>
          <span className='units'>C|F</span>
        </div>
        <span>💨 4 km/h</span>
        <span>💧 12%</span>
      </div>
    </div>
  );
}
