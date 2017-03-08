import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    menu_active: "2",
    api_list: [
    	{id: 1, work: true},
    	{id: 2, work: false}
    ]
  },
  getters: {
    workApis: state => {
      return state.api_list.filter(api => api.work)
    }
  },
  mutations: {
    increment (state) {
    	// test code at page '/' & '/api'
      state.count++
    },
    changeMenu (state, active) {
      state.menu_active = active;
    },
    addtrueApis (state) {
      var l = state.api_list.length
      state.api_list.push({id: l + 1, work: true})
    },
    addfalseApis (state) {
      var l = state.api_list.length
      state.api_list.push({id: l + 1, work: false})
    }
  }
})

export default store
