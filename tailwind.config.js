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
		default: "#ff6900",
		defaultText: "#d15700",
		},
		extend: {},	
	},
	variants: {
		extend: {},
	},
	plugins: [
	],
}
