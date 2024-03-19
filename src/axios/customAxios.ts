import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://localhost:3001/api/v3",
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
  withCredentials: true,
});

export default customAxios;
