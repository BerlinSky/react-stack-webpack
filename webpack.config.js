module.exports = {
	debug: true,
  devtool: 'cheap-module-eval-source-map', 
  noInfo: true,
	entry: {
		main: [
			'./src/main.js'
		]
	},
	output: {
		filename: './public/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	}
}