import axios from "axios";

export const getPosts = async () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getUsers = async () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};
