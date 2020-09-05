import React from "react";
import Navigation from "../Navigation/Navigation";

const Header = ({ heading }) => (
  <header>
    <h4>{heading}</h4>
    <Navigation />
  </header>
);

export default Header;
