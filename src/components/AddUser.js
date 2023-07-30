import { useState } from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./AddUser.module.css";

const INITIAL_USER = { username: "", userage: "" };

const AddUser = (props) => {
  const [userInfo, setUserInfo] = useState(INITIAL_USER);

  const changeHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setUserInfo((userInfo) => ({ ...userInfo, [id]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmitForm(userInfo);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div>
          <p className={classes.input}>
            <label>Name:</label>
            <input
              id="username"
              type="text"
              value={userInfo.name}
              onChange={changeHandler}
            />
          </p>
          <p className={classes.input}>
            <label>Age:</label>
            <input
              id="userage"
              type="number"
              value={userInfo.age}
              onChange={changeHandler}
            />
          </p>
        </div>
        <div className={classes.actions}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};
export default AddUser;
