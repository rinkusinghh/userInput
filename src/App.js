import React, { useState } from "react";
import User from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  const [userList, setUserList] = useState([
    { name: "rinku", age: 23, id: "a1" },
  ]);

  const addUserListHandler = (uName, uAge) => {
    setUserList((previousUser) => {
      return [
        ...previousUser,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <User onAddHandler={addUserListHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
