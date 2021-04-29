import Vue from "vue";
import VueRouter from "vue-router";
// import store from "./vuex";
import Main from "../components/pages/Main";
import Login from "../components/auth/Login";
import Dashboard from "../components/pages/Dashboard";
import Profile from "../components/pages/Profile";

Vue.use(VueRouter);

const routes = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main,
      name: "root",
      children: [
        {
          path: "/",
          component: Dashboard,
          name: "root",
        },
        {
          path: "/profile",
          component: Profile,
          name: "profile",
        },
      ],
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
  ],
});

// routes.beforeEach(() => {
//   // let isAuthenticated = localStorage.getItem("userAuthenticate")
//   //   ? localStorage.getItem("userAuthenticate")
//   //   : "no";
//   // if (to.name == "login" && isAuthenticated == "no") {
//   //   next({ name: "login" });
//   // } else {
//   //   next();
//   // }
//   console.log(store.getters.getAccessToken);
// });

export default routes;
