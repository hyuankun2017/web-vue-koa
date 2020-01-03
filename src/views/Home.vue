<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App"/>
		<!-- <a-button type="primary">Primary</a-button> -->
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	console.log('这是个啥子哟')
	export default {
		name: 'home',
		components: {
			HelloWorld
		}
	}
</script>
