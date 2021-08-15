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
		defaultDim: "#fff0e6",
		defaultText: "#d15700",
		defaultGray: "#f3f3f7",
		defaultGrayText: "#5c6370",
		},
		extend: {},	
	},
	variants: {
		extend: {},
	},
	plugins: [
	],
}
