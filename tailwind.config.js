const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		`components/**/*.{vue,js}`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`composables/**/*.{js,ts}`,
		`plugins/**/*.{js,ts}`,
		`app.{js,ts,vue}`
	],
	theme: {
		extend: {
			colors: {
				primary: defaultTheme.colors.green
			},
			fontFamily: {
				sans: ['PUK', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
