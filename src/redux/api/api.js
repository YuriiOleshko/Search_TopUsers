import axios from "axios";

export function getBase(val) {
  return axios.get(
    `https://api.github.com/search/users?q=location:${val}&sort=followers:%3E1000&per_page=10`
  );
}

export function getStars(user) {
  return axios.get(`https://api.github.com/users/${user}/repos`);
}

export function getUser(user) {
  return axios.get(`https://api.github.com/users/${user}`);
}
