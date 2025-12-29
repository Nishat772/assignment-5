import axiosInstance from "../lib/axiosInstance";

export const createEvent = (data) => axiosInstance.post("/", data);

export const getallEvents = (data) => axiosInstance.get("/");