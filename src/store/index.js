import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menu_active: "/api/time",
  },
  getters: {},
  mutations: {
    changeMenu (state, active) {
      state.menu_active = active;
    },
  }
});

export default store
