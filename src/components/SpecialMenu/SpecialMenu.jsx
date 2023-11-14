import React from 'react';

import { images, data } from '../../constant';
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu">
      <div className="app__specialMenu-items">
        {data.foods.map((food, index) => (
          <p> {food.title} </p>
        ))}
      </div>
    </div>
  );
};


export default SpecialMenu