import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const vuex = new Vuex.Store({
  state: {
    userAuthenticate: "no",
    accessToken: "",
    loggedInUserData: "",
    employeeCheckedin: "no",
    employeeCheckedout: "no",
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
    setUserAuthenticate: (state) => {
      state.userAuthenticate = localStorage.getItem("userAuthenticate");
    },
    setAccessToken: (state) => {
      state.accessToken = localStorage.getItem("accessToken");
    },
    setLoggedInUserData: (state) => {
      this.$http
        .get("/auth_user")
        .then((results) => {
          state.loggedInUserData = results.data;
        })
        .catch(() => {
          state.loggedInUserData = "";
        });
    },
    setEmployeeCheckedin: (state) => {
      state.employeeCheckedin = localStorage.getItem("employeeCheckedin");
    },
    setEmployeeCheckedout: (state) => {
      state.employeeCheckedout = localStorage.getItem("employeeCheckedout");
    },
  },

  actions: {
    setUserAuthenticate: (context) => {
      context.commit("setUserAuthenticate");
    },
    setAccessToken: (context) => {
      context.commit("setAccessToken");
    },
    setLoggedInUserData: (context) => {
      context.commit("setLoggedInUserData");
    },
    setEmployeeCheckedin: (context) => {
      context.commit("setEmployeeCheckedin");
    },
    setEmployeeCheckedout: (context) => {
      context.commit("setEmployeeCheckedout");
    },
  },
});

export default vuex;
