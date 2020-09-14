import React from "react";
import FooterStyled from "./Footer.styled";

type FooterProps = {
  info: string;
};

const Footer = ({ info }: FooterProps) => (
  <FooterStyled className="app-footer">{info}</FooterStyled>
);

export default Footer;
