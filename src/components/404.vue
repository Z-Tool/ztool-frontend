<template>
<div>
	<p>{{ message }}</p>
	<router-link to="/"><el-button>Home</el-button></router-link>
</div>
</template>

<script>
import { Button } from 'element-ui'
import Vue from 'vue'

Vue.component(Button.name, Button)

export default {
	data () {
		return {
			message: '404 not found'
		}
	}
}
</script>

<style scoped>
div {
	text-align: center;
}
</style>
