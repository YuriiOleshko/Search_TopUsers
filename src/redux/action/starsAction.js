import { getStars } from "../api/api";

export function addStars(data) {
  return {
    type: "addStard",
    data
  };
}
export function ClearStars() {
    return {
      type: "ClearStars",
    };
  }

export const fetchStars = user => dispatch => {
  return getStars(user)
    .then(data => dispatch(addStars(data.data)))
    .catch(err => alert("Терпеть 1 минуту"));
};
