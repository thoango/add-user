import React from "react";
import { useState, Fragment } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import ErrorModal from "./components/ErrorModal";

function App() {
  const [usersList, setUsersList] = useState([]);
  // const [showedError, setShowedError] = useState(false);
  // const [erroredInfo, setErroredInfo] = useState({
  //   username: false,
  //   userage: false,
  // });

  const addUserHandler = (userInput) => {
    // if (userInput.username.trim().length > 0 && +userInput.userage >= 0) {
    //   setUsersList((usersList) => [...usersList, userInput]);
    // } else {
    //   setErroredInfo({
    //     username: userInput.username.trim().length === 0,
    //     userage: +userInput.userage < 0,
    //   });
    //   setShowedError(true);
    // }

    setUsersList((usersList) => [...usersList, userInput]);
  };

  // const closeErrorHandler = () => {
  //   setShowedError(false);
  // };

  return (
    <Fragment>
      <AddUser onSubmitForm={addUserHandler}></AddUser>
      <UsersList usersList={usersList}></UsersList>
      {/* {showedError && (
        <ErrorModal
          errorData={erroredInfo}
          onCloseError={closeErrorHandler}
        ></ErrorModal>
      )} */}
    </Fragment>
  );
}

export default App;
