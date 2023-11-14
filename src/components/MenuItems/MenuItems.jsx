import React from 'react'



const MenuItems = ({ title, price }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#ffffff", fontSize:27 }}>
          {title}
        </p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="p__cormorant" style={{ color: "#000000", fontSize: 27 }}>{price}</p>
      </div>
    </div>

    
  </div>
);

export default MenuItems