import { useState } from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

const INITIAL_USER = { username: "", userage: "" };

const AddUser = (props) => {
  const [userInfo, setUserInfo] = useState(INITIAL_USER);
  const [error, setError] = useState();

  const changeHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    setUserInfo((userInfo) => ({ ...userInfo, [id]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      userInfo.username.trim().length === 0 ||
      userInfo.userage.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userInfo.userage < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onSubmitForm(userInfo);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          errorMessage={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={userInfo.name}
            onChange={changeHandler}
          />
          <label htmlFor="userage">Age (Years):</label>
          <input
            id="userage"
            type="number"
            value={userInfo.age}
            onChange={changeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
