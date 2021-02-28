import path from 'path'
import { Configuration as WebpackConfig } from 'webpack'
import { Configuration as DevServerConfig } from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
	entry: {
		polyfill: [
			'react-app-polyfill/ie11',
			'react-app-polyfill/stable',
		],
		main: './index.ts',
	},
	output: {
		path: path.resolve('./dist'),
	},
	devServer: {
		firewall: false,
		host: '0.0.0.0',
	},
	module: {
		rules: [
			// jsx & tsx
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: [
					/node_modules/ ],
				use: [
					{
						loader: 'babel-loader',
						options: {
							babelrc: false,
							extends: './.babelrc',
							cacheDirectory: true
						}
					}
				]
			}
		]
	},
	plugins: [
		// index.html の生成
		new HtmlWebpackPlugin({
			filename: 'index.html',
		}),
	]
} as WebpackConfig & { devServer: DevServerConfig }
