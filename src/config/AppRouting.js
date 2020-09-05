import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "../views/Users/Users";
import Articles from "../views/Articles/Articles";
import Home from "../views/Home/Home";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/users",
    component: Users,
    exact: false,
  },
  {
    path: "/articles",
    component: Articles,
    exact: false,
  },
];

const AppRouting = () => (
  <Switch>
    {routes.map(({ exact, path, component }) => (
      <Route key={path} exact={exact} path={path} component={component} />
    ))}
  </Switch>
);

export default AppRouting;
