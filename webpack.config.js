const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
})

const config = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
		        use: [
		          {
		            loader: "style-loader"
		          },
		          {
		            loader: "css-loader",
		            options: {
		              modules: true,
		              importLoaders: 1,
		              localIdentName: "[name]_[local]_[hash:base64]",
		              sourceMap: true,
		              minimize: true
		            }
		          }
		        ]
			}
		]
	},
	plugins: [htmlWebpackPlugin]
};

module.exports = config;