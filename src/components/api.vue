<template>
<div>
	<el-menu default-active="1" mode="horizontal" @select="handleSelect">
	  <router-link to="/api1/time"><el-menu-item index="0"><span>{{ title }}</span></el-menu-item></router-link>
	  <router-link to="/api1/time"><el-menu-item index="1">Time</el-menu-item></router-link>
	  <router-link to="/api1/jalpc_count"><el-menu-item index="2">Jalpc Count</el-menu-item></router-link>
	  <router-link to="/api"><el-menu-item index="3">RSS</el-menu-item></router-link>
	  <router-link to="/api1"><el-menu-item index="4">IP Information</el-menu-item></router-link>
	  <router-link to="/api1"><el-menu-item index="5">Domain Name Information</el-menu-item></router-link>
	  <router-link to="/api1/time"><el-menu-item index="6">DNS Record</el-menu-item></router-link>
	</el-menu>
 	<router-view></router-view>
</div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import { Menu, MenuItem, Submenu } from 'element-ui'
import constant from '../constant.js'
import http from '../directive/http'
import Auth from '../directive/auth'
import router from '../router'
import store from '../store'

Vue.use(VueResource);
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(Submenu.name, Submenu)
Vue.prototype.$notify = Notification

export default {
	name: 'api',
	data () {
		return {
			title: 'Jack003'
		}
	},
	methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
div {
	text-align: center;
}
span {
	color: black;
	font-size: 22px;
}
a {
	text-decoration: none;
}
</style>
