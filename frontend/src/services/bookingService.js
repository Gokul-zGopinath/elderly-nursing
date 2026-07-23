import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/bookings",
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const getBookings = () => API.get("/");
export const createBooking = (data) => API.post("/", data);