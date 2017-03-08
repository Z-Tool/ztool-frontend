<template>
<div>
	<el-menu v-bind:default-active="menu_active" mode="horizontal" @select="handleSelect">
	  <router-link to="/api1/time"><el-menu-item index="1"><span>{{ title }}</span></el-menu-item></router-link>
	  <router-link to="/api1/time"><el-menu-item index="2">Time</el-menu-item></router-link>
	  <router-link to="/api1/jalpc_count"><el-menu-item index="3">Jalpc Count</el-menu-item></router-link>
	  <router-link to="/api"><el-menu-item index="4">RSS</el-menu-item></router-link>
	  <router-link to="/api1"><el-menu-item index="5">IP Information</el-menu-item></router-link>
	  <router-link to="/api1"><el-menu-item index="6">Domain Name Information</el-menu-item></router-link>
	  <router-link to="/api1/time"><el-menu-item index="7">DNS Record</el-menu-item></router-link>
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
