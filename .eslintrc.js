module.exports = {
	root: true,
	env: {
		browser: true,
		'jest/globals': true,
		node: true
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended'
	],
	plugins: [
		'jest'
	],
	// add your custom rules here
	rules: {
		// 0 - off tabs indent warning
		"indent": [0, "tab"],
		// error  Unexpected tab character 
		"no-tabs": 0
	}
}
