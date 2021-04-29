import Vue from "vue";
import App from "./App.vue";
import routes from "./packages/routes";
import vuex from "./packages/vuex";
import axios from "./packages/axios";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router: routes,
  store: vuex,
  render: (h) => h(App),
}).$mount("#app");
