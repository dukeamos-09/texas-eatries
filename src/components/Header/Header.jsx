import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import images from "../../constant/images";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header  app__wrapper  section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Texas Eatries exceeds others ..." />
        <h1 className="app__header-h1">
          What a Great Taste? Take A Happy Bite!!!
        </h1>
        <p style={{ margin: "1rem" }}>
          Come and Dine at Texas Bite to experience a Great Treat and enjoy our
          Delicious Texacious meals
        </p>
        <button type="button" className="custom__button">
          Explore More
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.meatballs} alt="header img" />
        <img
          src={images.raspberries_cake}
          alt="raspberries_cake"
          className="burger__img"
        />
        <img
          src={images.grilled_chicken}
          alt="grilled_chicken"
          className="burger__img"
        />
        <img
          src={images.blackberries_toast}
          alt="blackberries_toast"
          className="burger__img"
        />
        <img src={images.burger} alt="burger" className="burger__img" />
        <img src={images.salad} alt="salad" className="burger__img" />
      </div>
    </div>
  );
};

export default Header;
