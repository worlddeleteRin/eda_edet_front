/* eslint-disable */
// import '../src/main.css'

const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
	"@storybook/addon-postcss",
	"@storybook/addon-actions",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
//              require('autoprefixer')
            ]
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    });
	config.resolve.alias = {
		...config.resolve.alias,
		"@": path.resolve(__dirname, "../src/"),
	}
//
//	function resolve(dir) {
//		return path.join(__dirname, '..', dir);
//	}
//	config.resolve = {
//		extensions: ['.js', '.vue', '.json'],
//		alias: {
//		  vue$: 'vue/dist/vue.esm.js',
//		  '@': resolve('src'),
//		},
//	  };
    return config
  }
}
