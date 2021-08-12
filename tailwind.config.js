const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
		},
		colors: {
		...colors,
		default: "#00d954",
		},
		extend: {},	
	},
	variants: {
		extend: {},
	},
	plugins: [
	],
}
