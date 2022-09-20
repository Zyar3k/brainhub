import axios from "axios";
import { BASE_URL } from "../config_URL";

const request = axios.create({
  baseURL: BASE_URL,
});

export default request;
