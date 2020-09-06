import React, { useEffect } from "react";
import "./Users.scss";
import { urlApi } from "../../config/api";
import Heading from "../../components/Heading/Heading";
import Section from "../../components/Section/Section";
import UserItem from "./UserItem/UserItem";
import Loading from "../../components/Loading/Loading";
import ErrorList from "../../components/ErrorList/ErrorList";
import { useFetchData } from "../../hooks";
import { parseDataToObject } from "../../utils";

const Users = () => {
  const { data, loading, error } = useFetchData(`${urlApi}/users`);
  const errorMessage = error && parseDataToObject(error).message;

  useEffect(() => {
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
        (error && <ErrorList message={errorMessage} />) || (
          <ul className="users-item-list">
            {data.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </ul>
        )
      )}
    </Section>
  );
};

export default Users;
