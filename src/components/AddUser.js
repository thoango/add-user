import { useState, useRef } from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";
import Wrapper from "./Helpers/Wrapper";

const INITIAL_USER = { username: "", userage: "" };

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userInfo, setUserInfo] = useState(INITIAL_USER);
  const [error, setError] = useState();

  // const changeHandler = (event) => {
  //   const id = event.target.id;
  //   const value = event.target.value;
  //   setUserInfo((userInfo) => ({ ...userInfo, [id]: value }));
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    // props.onSubmitForm(userInfo);
    props.onSubmitForm({ username: enteredName, userage: enteredAge });
    // setUserInfo(INITIAL_USER);
    nameInputRef.current.value = ""; //han che su dung ref de thao tac voi DOM
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="userage">Age (Years):</label>
          <input id="userage" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
