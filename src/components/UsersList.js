import Card from "./Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.usersList.map((user, index) => (
          <li key={index}>
            {user.username}: {user.userage}
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;
