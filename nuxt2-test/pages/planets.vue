<template>
	<div>
		<h1>Planets with fetch and pending, error etc</h1>
		<LazyPlanetsList v-if="show" />
		<button v-if="!show" @click="showList">Show Planets</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false
		}
	},
	methods: {
		showList() {
			this.show = true
		}
	}
}
</script>
