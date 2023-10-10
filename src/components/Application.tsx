import React from 'react';
import './Application.scss';
import { icons } from './Icons';

const Application: React.FC = () => {
  return (
    <div id='appContainer'>
      <div>
        <img className='item-icon' src={icons.typescript} /> Typescript
      </div>
      <div>
        <img className='item-icon' src={icons.react} /> React
      </div>
      <div>
        <img className='item-icon' src={icons.webpack} /> Webpack
      </div>
      <div>
        <img className='item-icon' src={icons.chrome} /> Chrome
      </div>
      <div>
        <img className='item-icon' src={icons.nodejs} /> Node
      </div>
    </div>
  );
};

export default Application;
