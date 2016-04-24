var path = require('path');
var webpack = require('webpack');

module.exports = {
	debug: true,
  devtool: 'cheap-module-eval-source-map', 
  noInfo: true,
	entry: {
		main: [
			'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
		  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
			'./src/main.js'
		]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'public'),
		publicPath: '/public'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, 'src'),
				loader: 'react-hot!babel'
			},
			{
				test: /\.scss$/,
				include: path.join(__dirname, 'src'),
				loader: 'style!css!sass'
			}
		]
	}
}