import React, { useEffect, useState } from "react";
import "./Users.scss";
import axios from "axios";
import { urlApi } from "../../config/api";
import Heading from "../../components/Heading/Heading";
import Section from "../../components/Section/Section";
import UserItem from "./UserItem/UserItem";
import Loading from "../../components/Loading/Loading";
import ErrorList from "../../components/ErrorList/ErrorList";

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${urlApi}/users`);
        setUsersList(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };
    fetchUsers();

    // PROMISE WITHOUT ASYNC/AWAIT
    // setLoading(true);
    // axios
    //   .get(`${urlApi}/users`)
    //   .then((response) => response.data)
    //   .then((users) => {
    //     setUsersList(users);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     setError(error.message);
    //   });
  }, []);

  return (
    <Section className="users-page">
      <Heading title="My users" />
      {loading ? (
        <Loading />
      ) : (
        (error && <ErrorList message={error} />) || (
          <ul className="users-item-list">
            {usersList.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ul>
        )
      )}
    </Section>
  );
};

export default Users;
