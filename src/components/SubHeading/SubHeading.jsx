import React from "react";

import images from "../../constant/images";


const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <p>{title}</p>

      <img
        src={images.raspberries_cake}
        alt="raspberries_cake"
        className="burger__img"
      />
      <img
        src={images.blackberries_toast}
        alt="blackberries_toast"
        className="burger__img"
      />
      <img
        src={images.grilled_chicken}
        alt="grilled_chicken"
        className="burger__img"
      />
      <img src={images.salad} alt="salad" className="burger__img" />
      <img src={images.meatballs} alt="meatballs" className="burger__img" />
      <img src={images.burger} alt="burger" className="burger__img" />
    </div>
  );
};

export default SubHeading;
