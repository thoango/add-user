import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.usersList.map((user, index) => (
          <li key={index}>
            {user.username}: {user.userage}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UsersList;
