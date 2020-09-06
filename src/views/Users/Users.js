import React, { useEffect, useState } from "react";
import "./Users.scss";
import axios from "axios";
import { urlApi } from "../../config/api";
import Heading from "../../components/Heading/Heading";
import Section from "../../components/Section/Section";
import UserItem from "./UserItem/UserItem";

const Users = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(`${urlApi}/users`);
      setUsersList(data);
    };

    fetchUsers();

    // PROMISE WITHOUT ASYNC/AWAIT
    // axios
    //   .get(`${urlApi}/users`)
    //   .then((response) => response.data)
    //   .then((users) => setUsersList(users));
  }, []);

  return (
    <Section className="users-page">
      <Heading title="My users" />
      <ul className="users-item-list">
        {usersList.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </Section>
  );
};

export default Users;
