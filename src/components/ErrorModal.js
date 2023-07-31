import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.errorMessage}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Close</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          errorMessage={props.errorMessage}
          onConfirm={props.onConfirm}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};
export default ErrorModal;
