import axios from "axios";

const API = axios.create({
  baseURL: "https://elderly-nursing.onrender.com/api/bookings",
});

API.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export const getBookings = () => API.get("/");
export const createBooking = (data) => API.post("/", data);