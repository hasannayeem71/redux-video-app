import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "lws-assignment.herokuapp.com",
});
export default axiosInstance;
