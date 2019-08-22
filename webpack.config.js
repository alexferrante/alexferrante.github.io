const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
	entry: `${__dirname}/src/index.js`,
	output: {
		path: `${__dirname}/build`,
		publicPath: '/build/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{
				test: /\.module\.s(a|c)ss$/,
				loader: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]',
							camelCase: true,
							sourceMap: isDevelopment
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment
						}
					}
				]
			},
			{
				test: /\.s(a|c)ss$/,
				exclude: /\.module.(s(a|c)ss)$/,
				loader: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: isDevelopment
						}
					}
				]
			},
			{
				test: /\.svg$/,
				use: [
				  {
					loader: "babel-loader"
				  },
				  {
					loader: "react-svg-loader",
					options: {
					  jsx: true // true outputs JSX tags
					}
				  }
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},
	plugins: process.argv.indexOf('-p') === -1 ? [] : [
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false,
			},
		}),
		new MiniCssExtractPlugin({
			filename: isDevelopment ? '[name].css' : '[name].[hash].css',
			chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
		})
	],
};