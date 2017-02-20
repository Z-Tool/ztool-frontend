var Vue = require('vue')
var Vuex = require('vuex')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
    	// test code at page '/' & '/api'
      state.count++
    }
  }
})

export default store
