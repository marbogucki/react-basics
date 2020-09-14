import React from "react";
import Navigation from "../Navigation/Navigation";

type HeaderProps = {
  heading: string;
};

const Header = ({ heading }: HeaderProps) => (
  <header>
    <h4>{heading}</h4>
    <Navigation />
  </header>
);

export default Header;
