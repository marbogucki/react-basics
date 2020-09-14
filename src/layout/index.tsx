import React, { Fragment } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import AppRouting from "../config/AppRouting";
import Footer from "./Footer/Footer";

const AppLayout = () => (
  <Fragment>
    <Header heading="title" />
    <Main>
      <AppRouting />
    </Main>
    <Footer info="Copyright &copy; by Marcin" />
  </Fragment>
);

export default AppLayout;
