import axios from "axios";

const API = axios.create({
  baseURL:"https://smart-libarary-backend.onrender.com"
});

export default API;