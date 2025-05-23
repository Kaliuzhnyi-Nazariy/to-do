import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://to-do-api-qanj.onrender.com/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axiosInstance;
