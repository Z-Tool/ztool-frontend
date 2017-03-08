<template>
	<div style="margin-top: 20px;">
		<el-row :gutter="20" style="margin-top: 20px;">
		  	<el-col :span="12" :offset="6">
				<div>{{ time }}</div>
				<el-input placeholder="Domain Server Address" v-model="domain_server">
				    <template slot="prepend">Http(s)://</template>
				    <el-button slot="append" icon="search" @click="get_info"></el-button>
				</el-input>
				<div v-show="result" id="result" style="text-align: left;margin-top: 20px;"></div>
				<el-tooltip v-show="result" effect="dark" content="Copy" placement="right">
					<el-button @click="copy_result" size="small" icon="document"></el-button>
				</el-tooltip>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import Vue from 'vue'
import JSONFormatter from 'json-formatter-js'
import copy from 'copy-to-clipboard';
import { Input, Button, Notification, Row, Col, Tooltip, Message } from 'element-ui'
import http from '../../../directive/http'
import store from '../../../store'

Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Message.name, Message)
Vue.prototype.$message = Message

export default {
data() {
  	return {
  		time: '',
  		domain_server: '',
  		result: ''
  	};
},
methods: {
	get_info () {
		http.get(this, '/api/v1.0/nslookup?domain=' + this.domain_server).then(resp => {
			this.result = JSON.stringify(resp.data)
	      	const formatter = new JSONFormatter(resp.data)
	      	document.getElementById('result').innerHTML = ""
	      	document.getElementById('result').appendChild(formatter.render())
	      	formatter.openAtDepth(5)
	    })
	},
	copy_result () {
		copy(this.result)
		this.$message('Copy success!');
	}
},
created: function () {
	  store.commit('changeMenu', "7")
  }
}
</script>

<style>
</style>
