<template>
	<div class="mountains-list">
		<h3><strong>Data fetched using fetch</strong></h3>
		<ul v-for="mountain in mountains" :key="mountain.id">
			<NuxtLink :to="`${mountain.continent.toLowerCase()}/${mountain.slug}`">
				<li>{{ mountain.title }}</li>
				<img :src=mountain.image />
			</NuxtLink>
		</ul>
	</div>
</template>
<script>
export default {
	async asyncData() {
		const mountains = await fetch(
			'https://api.nuxtjs.dev/mountains'
		).then((res) => res.json())
		// console.log(mountains)
		return { mountains }
	}
}

</script>

<style>
.mountains-list {}
</style>