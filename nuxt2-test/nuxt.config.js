export default {
	loading: '~/components/LoadingBar.vue',
	// loading: {
	// 	color: 'green',
	// 	height: '5px',
	// 	continuous: true,
	// 	duration: 3000
	// },






	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Nuxt',
		titleTemplate: 'My amazing Nuxt application | %s',
		htmlAttrs: {
			lang: 'en',
			amp: true
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'The amazing Nuxt application that teaches me all the cool features of Nuxt'
			},
			// Twitter
			// Test on: https://cards-dev.twitter.com/validator
			{
				hid: 'twitter:card',
				name: 'twitter:card',
				content: 'summary_large_image'
			},
			{ hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
			{
				hid: 'twitter:url',
				name: 'twitter:url',
				content: 'https://nuxtjs.org'
			},
			{
				hid: 'twitter:title',
				name: 'twitter:title',
				content: 'My amazing Nuxt application'
			},
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content:
					'The amazing Nuxt application that teaches me all the cool features of Nuxt'
			},
			{
				hid: 'twitter:image',
				name: 'twitter:image',
				content: 'https://nuxtjs.org/nuxt-card.png'
			},

			// Open Graph
			// Test on: https://developers.facebook.com/tools/debug/
			{ hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt' },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{
				hid: 'og:url',
				property: 'og:url',
				content: 'https://nuxtjs.org'
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: 'My amazing Nuxt application'
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content:
					'The amazing Nuxt application that teaches me all the cool features of Nuxt'
			},
			{
				hid: 'og:image',
				property: 'og:image',
				content: 'https://nuxtjs.org/nuxt-card.png'
			},
			{
				hid: 'og:image:secure_url',
				property: 'og:image:secure_url',
				content: 'https://nuxtjs.org/nuxt-card.png'
			},
			{
				hid: 'og:image:alt',
				property: 'og:image:alt',
				content: 'NuxtJS'
			}
		],

		link: [
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap'
			}
		],
		script: [
			{
				src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
				async: true,
				defer: true
			}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/tooltip.css'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/vue-tooltip.js'
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/stylelint
		// '@nuxtjs/stylelint-module'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		'@nuxt/http'
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/'
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en'
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
