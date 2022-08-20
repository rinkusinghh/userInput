import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";

const User = (props) => {
  const addUserHanler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHanler}>
        <label htmlFor="username">Username</label>
        <input id="text" type="text" />
        <label htmlFor="age">Age (Year)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default User;
