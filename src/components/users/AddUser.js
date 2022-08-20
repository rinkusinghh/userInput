import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const User = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHanler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHanler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHanler = (event) => {
    event.preventDefault();

    // Form validation!
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid inputs (no-empty values)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0)",
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddHandler(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const errorCancelHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorCancelHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHanler}>
          <label htmlFor="username">Username</label>
          <input
            id="text"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHanler}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHanler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default User;
