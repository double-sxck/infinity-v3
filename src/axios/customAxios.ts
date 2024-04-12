import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
  withCredentials: true,
});

export default customAxios;
