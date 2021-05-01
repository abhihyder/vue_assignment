import Vue from "vue";
import Vuex from "vuex";
import state from "./store/state";
import getters from "./store/getters";
import mutations from "./store/mutations";
import actions from "./store/actions";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const vuex = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()],
});

export default vuex;
