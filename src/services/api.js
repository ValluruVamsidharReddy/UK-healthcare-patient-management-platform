import axios from "axios";

const API = axios.create({
  baseURL: "https://healthcare-jwt-auth.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
