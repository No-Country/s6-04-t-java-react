import axios from "axios";

const apiURL: string = import.meta.env.VITE_API_BASE_URL;

const client = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
  },
});
const isClientError = axios.isAxiosError;

client.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

client.interceptors.response.use(response => response.data);

export { client, isClientError };