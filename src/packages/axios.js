import axios from "axios";
// import store from "./vuex";

export default axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
    // Authorization: "Bearer " + store.state.accessToken,
  },
});
