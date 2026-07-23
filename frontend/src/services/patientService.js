import axios from "axios";

const API = axios.create({
  baseURL: "https://elderly-nursing.onrender.com/api/patients",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const getPatients = () => API.get("/");
export const createPatient = (data) => API.post("/", data);