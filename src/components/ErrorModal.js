import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  let errorMessage = "Invalid Username!";
  if (props.errorData.userage && props.errorData.username) {
    errorMessage = "Invalid Userage and Username!";
  } else if (props.errorData.userage) {
    errorMessage = "Invalid Userage!";
  }

  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <div className={classes.header}>
          <h2>Invalid input</h2>
        </div>
        <div className={classes.content}>{errorMessage}</div>
        <Button
          className={classes.actions}
          type="button"
          onClick={props.onCloseError}
        >
          Close
        </Button>
      </Card>
    </div>
  );
};
export default ErrorModal;
