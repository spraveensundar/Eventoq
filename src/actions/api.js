import axios from "axios";
import { API_HOST } from "../config";

var api = axios.create({
    baseURL: API_HOST,
    responseType: 'json',
    responseEncoding: 'utf8',
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.response.use(
    response => console.log(response),
    error => {
        if (error.response && error.response.status === 401) {
            console.log("Unauthorized! Redirecting to login...");
        }
        return Promise.reject(error);
    }
);

export default api;