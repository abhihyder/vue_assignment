import axios from "axios";
import store from "./vuex";

const http = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

http.interceptors.request.use(function(config) {
  let authKey = store.getters.getAccessToken;
  config.headers["Authorization"] = authKey;
  return config;
});

export default http;
