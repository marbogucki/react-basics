import React from "react";
import "./Heading.scss";

type HeadingProps = {
  title: string;
};

const Heading = ({ title }: HeadingProps) => (
  <h2 className="heading-page">{title}</h2>
);

export default Heading;
