<template>
	<div>
		<h1>Hello Nuxters! 👋</h1>
		<p>
			This page is rendered on the <strong>{{ rendering }}</strong>
		</p>
		<p v-if="rendering === 'server'">
			First load or hard refresh is done on server side.
		</p>
		<p v-if="rendering === 'client'">Navigation is done on client side.</p>
		<ul>
			<li>Refresh the page for server side rendering.</li>
			<li>Click the links to see client side rendering.</li>
		</ul>
		<h1>Vue Plugins</h1>
		<button v-tooltip.top-center="msg">Hover me</button>
		<NuxtLink to="/about">About Page</NuxtLink>
	</div>
</template>
<script>
export default {
	data() {
		return {
			title: 'Hello Nuxters!',
			msg: 'Vue tooltip plugin'
		}
	},
	head() {
		return {
			title: this.title,
			meta: [
				{
					hid: 'description',
					name: 'description',
					content:
						'The amazing Nuxt application that teaches me all the cool features of Nuxt'
				}
			]
		}
	},
	asyncData() {
		return {
			rendering: process.server ? 'server' : 'client'
		}
	}
}
</script>
