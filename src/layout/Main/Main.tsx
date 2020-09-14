import React, { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};
const Main = ({ children }: MainProps) => <main>{children}</main>;

export default Main;
