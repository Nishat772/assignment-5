import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/event", 
    // need a base url from mongobd.
});

export default axiosInstance;