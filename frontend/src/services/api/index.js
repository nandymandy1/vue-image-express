import axios from "axios";
import { baseURL } from "@/constants";

const api = axios.create({
  baseURL,
});

export default api;
