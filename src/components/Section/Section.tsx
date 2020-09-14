import React, { ReactNode } from "react";

type SectionProps = {
  className: string;
  children: ReactNode;
};

const Section = ({ className, children }: SectionProps) => (
  <section className={className}>{children}</section>
);

export default Section;
