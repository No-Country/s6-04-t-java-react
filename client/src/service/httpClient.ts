import axios from "axios";

const apiURL: string = import.meta.env.VITE_API_BASE_URL;
const token = localStorage.getItem("token") || "";
const Authorization = token && `Bearer ${token}`;

const client = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
    Authorization,
  },
});
const isClientError = axios.isAxiosError;
client.interceptors.response.use(response => response.data);

export { client, isClientError };