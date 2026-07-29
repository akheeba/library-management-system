import axios from "axios";

const API = axios.create({
  baseURL: "https://library-management-system-crbv.onrender.com",
});

export default API;