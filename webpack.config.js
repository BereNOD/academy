const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const _mode = process.env.NODE_ENV || 'production';

const _module = {
	rules: [
		{
			test: /\.(sa|sc|c)ss$/,
			use: [
				{
					loader: MiniCssExtractPlugin.loader
				},
				{
					loader: 'css-loader'
				},
				{
					loader: 'postcss-loader',
					options: {
						plugins: () => [require('autoprefixer')]
					}
				},
				{
					loader: 'sass-loader'
				}
			]
		},
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}
	]
};

const _resolve = {
	extensions: ['.js', '.jsx',]
};

const _plugins = [
	new MiniCssExtractPlugin({
		filename:  '[name].css'
	})
];

module.exports = [
	{
		mode: _mode,
		name: 'client',
		entry: ['babel-polyfill', './src/client/index.jsx'],
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.js'
		},
		watch: true,
		resolve: _resolve,
		module: _module,
		plugins: _plugins
	},
	{
		mode: _mode,
		name: 'server',
		entry: ['babel-polyfill', './src/server/server.js'],
		output: {
			path: __dirname,
			filename: 'app.js'
		},
		watch: true,
		resolve: _resolve,
		module: _module,
		plugins: _plugins
	}
];