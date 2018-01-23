'use strict';
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

module.exports = merge(baseWebpackConfig, {
	devServer: {
		clientLogLevel: 'warning',
		hot: true,
		compress: true,
		host: HOST || config.dev.host,
		port: PORT || config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: config.dev.errorOverlay
		? { warnings: false, errors: true }
		: false,
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable,compress: true,
		host: HOST || config.dev.host,
		port: PORT || config.dev.port,
		open: config.dev.autoOpenBrowser,
		overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
		publicPath: config.dev.assetsPublicPath,
		proxy: config.dev.proxyTable,
		watchOptions: {
			poll: config.dev.poll,
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': require('../config/dev.env')
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './static/index.html',
			inject: true
		}),
	]
});
