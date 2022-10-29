<template>
	<div>
		<p v-if="$fetchState.pending">Loading planets....</p>
		<p v-else-if="$fetchState.error">Error while fetching planets</p>
		<ul v-else>
			<li v-for="(planet, index) in planets" :key="index.id">
				<strong>{{ planet.title }}</strong>
				<br />
				<img :src="planet.image" class="planet_image" />
				<p class="planet_desc">{{ planet.description }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			planets: []
		}
	},
	async fetch() {
		this.planets = await fetch(
			'https://api.nuxtjs.dev/planets'
		).then((res) => res.json())
	}
}
</script>

<style>
.planet_image {
	width: 200px;
}

.planet_desc {
	width: 200px;
}
</style>