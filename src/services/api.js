import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 6000,
});

api.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("@TOKEN");