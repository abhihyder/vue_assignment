import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios";

Vue.use(Vuex);

const vuex = new Vuex.Store({
  state: {
    userAuthenticate: false,
    accessToken: "",
    loggedInUserData: "",
    employeeCheckedin: false,
    employeeCheckedout: false,
  },

  getters: {
    getUserAuthenticate: (state) => {
      return state.userAuthenticate;
    },
    getAccessToken: (state) => {
      return state.accessToken;
    },
    getLoggedInUserData: (state) => {
      return state.loggedInUserData;
    },
    getEmployeeCheckedin: (state) => {
      return state.employeeCheckedin;
    },
    getEmployeeCheckedout: (state) => {
      return state.employeeCheckedout;
    },
  },

  mutations: {
    setUserAuthenticate: (state, payload) => {
      state.userAuthenticate = payload;
    },

    setAccessToken: (state) => {
      state.accessToken = localStorage.getItem("accessToken");
    },

    setLoggedInUserData: (state) => {
      axios
        .get("/auth_user")
        .then((results) => {
          if (results.data) {
            state.loggedInUserData = results.data.data;
            state.userAuthenticate = true;
          } else {
            state.loggedInUserData = "";
            state.userAuthenticate = false;
          }
        })
        .catch(() => {
          state.loggedInUserData = "";
          state.userAuthenticate = false;
        });
    },

    setCheckedInOrNot: (state) => {
      axios.get("/checkin_or_not").then((results) => {
        if (results.data.success.message == "yes") {
          state.employeeCheckedin = true;
        } else {
          state.employeeCheckedin = false;
        }
      });
    },

    setCheckedOutOrNot: (state) => {
      axios.get("/checkout_or_not").then((results) => {
        if (results.data.success.message == "yes") {
          state.employeeCheckedout = true;
        } else {
          state.employeeCheckedout = false;
        }
      });
    },
  },

  actions: {
    setUserAuthenticate: (context, payload) => {
      context.commit("setUserAuthenticate", payload);
    },

    setAccessToken: (context) => {
      context.commit("setAccessToken");
    },

    setLoggedInUserData: (context) => {
      context.commit("setLoggedInUserData");
    },

    setCheckedInOrNot: (context) => {
      context.commit("setCheckedInOrNot");
    },

    setCheckedOutOrNot: (context) => {
      context.commit("setCheckedOutOrNot");
    },
  },
});

export default vuex;
