<template>
	<div style="margin-top: 20px;">
		<el-button @click="refresh">Refresh</el-button>
		  <el-row :gutter="20" style="margin-top: 20px;">
		  	<el-col :span="6" :offset="9">
					<div>{{ time }}</div>
				</el-col>
			</el-row>
	</div>
</template>

<script>
import Vue from 'vue'
import { Button, Notification, Row, Col } from 'element-ui'
import http from '../../../directive/http'
import store from '../../../store'

Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)

export default {
data() {
  return {
  	time: ''
  };
},
methods: {
	refresh() {
		http.get(this, '/api/v1.0/time').then(resp => {
	      this.time = resp.body.data
	    })
	}
},
created: function () {
    http.get(this, '/api/v1.0/time').then(resp => {
      this.time = resp.body.data
    })
	  store.commit('changeMenu', "/api/time")
  }
}
</script>

<style scoped>

</style>
