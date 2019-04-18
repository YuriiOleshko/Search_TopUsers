import { getUser } from "../api/api";

export function addInfoToUser(data) {
  return {
    type: "User",
    data
  };
}
export function Clear() {
  return {
    type: "Clear",
   
  };
}

export const fetchUser = val => dispatch => {
  return getUser(val)
    .then(data => dispatch(addInfoToUser(data)))
    .catch(err =>
      alert(
        "Вы совершыли много попыток господин(жа), пожалуйста подождити 1 минутку ,ладно )))"
      )
    );
};
