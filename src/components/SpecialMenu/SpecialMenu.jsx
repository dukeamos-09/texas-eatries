import React from 'react';
import MenuItems from '../MenuItems/MenuItems';

import { images, data, foods } from '../../constant';
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu">
      <div className="app__specialMenu-items">
        {data.foods.map((food, index) => (
          <MenuItems
            key={food.title + index}
            title={food.title}
            price={food.price}
            
          />
        ))}
      </div>
    </div>
  );
};


export default SpecialMenu