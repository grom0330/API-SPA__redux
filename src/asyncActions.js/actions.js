import { addManyUsersAction } from "../store/userReducer";

export const fetchUsers = () => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((r) => r.json())
      .then((json) => dispatch(addManyUsersAction(json)));
  };
};
