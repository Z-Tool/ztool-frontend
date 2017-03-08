<template>
	<div style="margin-top: 20px;">
		<el-row :gutter="20" style="margin-top: 20px;">
		  	<el-col :span="10" :offset="7">
				<el-input placeholder="RSS Address" v-model="rss_address">
				    <el-select v-model="url_prefix" slot="prepend" placeholder="http://">
				      	<el-option label="http://" value="http://"></el-option>
				      	<el-option label="https://" value="https://"></el-option>
				    </el-select>
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
import { Input, Button, Notification, Row, Col, Tooltip, Message, Select, Option } from 'element-ui'
import http from '../../../directive/http'
import store from '../../../store'

Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Message.name, Message)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.prototype.$message = Message

export default {
data() {
  return {
  	rss_address: '',
  	url_prefix: 'http://',
  	result: ''
  };
},
methods: {
	get_info () {
		if (this.rss_address) {
			http.get(this, '/api/v1.0/rss?url=' + this.url_prefix + this.rss_address).then(resp => {
				this.result = JSON.stringify(resp.data)
		      	const formatter = new JSONFormatter(resp.data)
		      	document.getElementById('result').innerHTML = ""
		      	document.getElementById('result').appendChild(formatter.render())
		      	formatter.openAtDepth(2)
		    })
		} else {
			this.$message.error('Please input RSS Address!');
		}
	},
	copy_result () {
		copy(this.result)
		this.$message('Copy success!');
	}
},
created: function () {
	  store.commit('changeMenu', "/api/rss")
  }
}
</script>

<style>
.el-select .el-input {
width: 100px;
}
</style>
