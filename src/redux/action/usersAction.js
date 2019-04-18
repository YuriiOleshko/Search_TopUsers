import { getBase } from "../api/api";

export function addInfoToBlog(data) {
  return {
    type: "DOWNLOADED",
    data
  };
}

export const fetchData = val => dispatch => {
  return getBase(val)
    .then(data => dispatch(addInfoToBlog(data)))
    .catch(err =>
      alert(
        "Вы совершыли много попыток господин(жа), пожалуйста подождити 1 минутку ладно )))"
      )
    );
};
