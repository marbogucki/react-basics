import React, { Fragment } from "react";
import AppRouting from "../config/AppRouting";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

const AppLayout = () => (
  <Fragment>
    <Header heading="Basic example app" />
    <Main>
      <AppRouting />
    </Main>
    <Footer info="Copyright &copy; by Marcin" />
  </Fragment>
);

export default AppLayout;
