var Vue = require('vue')
var Vuex = require('vuex')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
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
    }
  }
})

export default store
