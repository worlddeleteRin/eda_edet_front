const path = require('path')
module.exports = {
    chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = 'Еда едет';
				return args
				}
			)
	}
}

