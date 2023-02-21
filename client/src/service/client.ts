import axios from "axios";

const client = axios.create({
    // baseURL: import.meta.env.VITE_API_BASE_URL
    baseURL: "https://consorcio-production.up.railway.app"
});

client.interceptors.response.use(response => response.data);

export default client;