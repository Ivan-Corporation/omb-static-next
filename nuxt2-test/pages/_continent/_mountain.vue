<template>
	<div class="mountain">
		<article>
			<SocialHead :title="mountain" :description="description" :image="image" />
			<h1>Continent: {{ continent }}</h1>
			<h2>Mountain: {{ mountain }}</h2>
			<p>Path: {{ $route.path }}</p>
			<img :src=image />
			<p>{{ description }}</p>
			<br />
			<NuxtLink to="/mountains">Back to Mountains</NuxtLink>
		</article>

	</div>
</template>
<script>
export default {
	async asyncData({ params, redirect }) {
		const mountains = await fetch(
			'https://api.nuxtjs.dev/mountains'
		).then((res) => res.json())

		const filteredMountain = mountains.find(
			(el) =>
				el.continent.toLowerCase() === params.continent &&
				el.slug === params.mountain
		)
		if (filteredMountain) {

			return {
				continent: filteredMountain.continent,
				mountain: filteredMountain.title,
				image: filteredMountain.image,
				description: filteredMountain.description


			}
		} else {
			redirect('/mountains')
		}
	},
	head() {
		return {
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: `https://nuxtjs.org/mountains/${this.$route.params.slug}`
				}
			]
		}
	}
}
</script>

<style>
.mountain {
	height: 100vh;
}
</style>
