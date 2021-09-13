const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
	//	sans: ["Montserrat", 'sans-serif']
		sans: ["Nunito", 'sans-serif']
		},
		colors: {
		...colors,
		default: "#00bfff",
		defaultDim: "#fff0e6",
		defaultTextBg: "#00bfff",
		defaultText: "#00bfff",
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
