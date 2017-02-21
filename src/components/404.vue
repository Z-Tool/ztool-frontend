<template>
<div>
	<p>{{ message }}</p>
	<router-link to="/">Home</router-link>
</div>
</template>

<script>
export default {
	name: '404',
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
