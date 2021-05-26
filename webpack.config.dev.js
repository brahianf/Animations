const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
	},
	mode: 'development',
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@styles':	path.resolve(__dirname, 'src/assets/styles/'),
			'@images': 	path.resolve(__dirname, 'src/assets/images/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@js' : path.resolve(__dirname, 'src/js/'),
		}
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
			{
				test: /.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /.(s*)css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/i,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						// mimetype: "application/font-woff",
						name: "[name].[ext]",
						outputPath: "./assets/fonts/",
						publicPath: "../assets/fonts/",
						esModule: false,
					},
				}
			}
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
		new Dotenv(),
		// new BundleAnalyzerPlugin(),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		historyApiFallback: true,
	},
}