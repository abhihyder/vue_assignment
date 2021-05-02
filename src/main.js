import Vue from "vue";
import App from "./App.vue";
import routes from "./packages/routes";
import vuex from "./packages/vuex";
import axios from "./packages/axios";
import GlobalMixin from "./mixins/globalMixin";
import Toasted from "vue-toasted";
import moment from 'moment'

Vue.prototype.moment = moment

Vue.use(Toasted, {
  theme: "bubble",
  position: "top-right",
  duration: 5000,
});

Vue.prototype.$http = axios;

Vue.mixin(GlobalMixin);

Vue.config.productionTip = false;

new Vue({
  router: routes,
  store: vuex,
  render: (h) => h(App),
}).$mount("#app");
