import axios from "axios";

const client = axios.create({
    // baseURL: import.meta.env.VITE_API_BASE_URL,
    // baseURL: "http://localhost:5000",
    baseURL: "http://44.200.219.85:5000",
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
    },
});

client.interceptors.response.use(response => response.data);

export default client;