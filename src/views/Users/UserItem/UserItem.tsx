import React from "react";
import "./UserItem.scss";
import { User } from "../models/User";

const UserItem: React.FC<{ user: User }> = ({
  user: {
    name,
    email,
    address: { zipcode, city, street },
  },
}) => (
  <li className="user-item">
    <h3 className="user-item__title">{name}</h3>
    <p className="user-item__address">
      <strong>Address:</strong> {zipcode} {city}, {street}
    </p>
    <p className="user-item__email">
      <strong>Email:</strong> {email}
    </p>
  </li>
);

export default UserItem;
