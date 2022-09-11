import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://lws-assignment.herokuapp.com",
});
export default axiosInstance;
