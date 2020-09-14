import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <NavLink to="/articles">Articles</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
