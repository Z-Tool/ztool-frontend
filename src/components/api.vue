<template>
<div>
	<el-menu v-bind:default-active="menu_active" router mode="horizontal" @select="handleSelect">
	  	<el-menu-item index="/api/time"><span>{{ title }}</span></el-menu-item>
	  	<el-menu-item index="/api/time">Time</el-menu-item>
		<el-menu-item index="/api/jalpc_count">Jalpc Count</el-menu-item>
		<el-menu-item index="/api/rss">RSS</el-menu-item>
		<el-menu-item index="/api/ip_information">IP Information</el-menu-item>
		<el-menu-item index="/api/domain_name">Domain Name Information</el-menu-item>
		<el-menu-item index="/api/dns">DNS Record</el-menu-item>
	  	<el-menu-item @click="logout" style="position: absolute;right: 0;" index="">Logout</el-menu-item>
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
			title: 'Jarrekk'
		}
	},
  	computed: {
    	menu_active () {
      		return store.state.menu_active
    	},
  	},
	methods: {
		logout () {
			Auth.logout()
			router.go('/user/login')
		},
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
