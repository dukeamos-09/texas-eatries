import React from "react";

import { Navbar, Header, SpecialMenu, MenuItems, SubHeading } from "./components";

import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
        <SpecialMenu />
        <MenuItems />
        <SubHeading />
      </div>
    </div>
  );
};

export default App;
