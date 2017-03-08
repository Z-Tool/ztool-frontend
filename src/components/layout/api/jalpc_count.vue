<template>
	<div style="margin-top: 20px;">
		  <el-row :gutter="20" style="margin-top: 20px;">
		  	<el-col :span="6" :offset="9">
					<div>{{ count }}</div>
				</el-col>
			</el-row>
	</div>
</template>

<script>
import Vue from 'vue'
import { Notification, Row, Col } from 'element-ui'
import http from '../../../directive/http'
import store from '../../../store'

Vue.component(Row.name, Row)
Vue.component(Col.name, Col)

export default {
data() {
  return {
  	count: ''
  };
},
methods: {
	refresh() {
		http.get(this, '/api/v1.0/jalpc/pv_count').then(resp => {
	      this.count = resp.body.data
	    })
	}
},
created: function () {
   	http.get(this, '/api/v1.0/jalpc/pv_count').then(resp => {
      this.count = resp.body.data
    })
	  store.commit('changeMenu', "/api/jalpc_count")
  }
}
</script>

<style>

</style>
