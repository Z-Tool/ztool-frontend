<template>
<div>
  <h1>{{ title }}</h1>
  <span><router-link to="/"><el-button :plain="true" type="info" size="small">Back</el-button></router-link></span>
  <!-- <span v-if="user">&emsp;<el-button :plain="true" type="info" size="small" @click="logout">Logout</el-button></span> -->
 	<router-view></router-view>
</div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import { Button, Notification, Row, Col, Collapse, CollapseItem, Tooltip } from 'element-ui'
import constant from '../constant.js'
import http from '../directive/http'
import Auth from '../directive/auth'
import router from '../router'
import store from '../store'

Vue.use(VueResource);
Vue.component(Button.name, Button)
Vue.component(Notification.name, Notification)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(CollapseItem.name, CollapseItem)
Vue.component(Collapse.name, Collapse)
Vue.component(Tooltip.name, Tooltip)
Vue.prototype.$notify = Notification

export default {
	name: 'api',
	data () {
		return {
			title: 'API List'
		}
	}
}
</script>

<style scoped>
div {
	text-align: center;
}
</style>
