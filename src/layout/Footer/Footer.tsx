import React from "react";
import "./Footer.scss";

type FooterProps = {
  info: string;
};

const Footer = ({ info }: FooterProps) => (
  <footer className="app-footer">{info}</footer>
);

export default Footer;
