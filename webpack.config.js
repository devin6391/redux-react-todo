var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const sourceFolder = "src";
const distFolder = "dist";
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: {
		"index": path.join(__dirname, sourceFolder, "index.js"),
		"polyfills": path.join(__dirname, sourceFolder, "polyfills.js")
	},
	devtool: 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, distFolder),
		publicPath: '',
		filename: '[name]-[hash].js'
	},
	module: {
		rules: [
			{
	      loader: "babel-loader",

				exclude: [
					path.resolve(__dirname, "node_modules"),
				],

	      // Only run `.js` and `.jsx` files through Babel
	      test: /\.jsx?$/,

	      // Options to configure babel with
	      query: {
	        plugins: ['add-module-exports', 'transform-class-properties', 'transform-runtime', 'react-html-attrs', 'transform-decorators-legacy'],
	        presets: ['es2015', 'stage-0', 'react'],
	      }
	    },
			{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    	},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader?limit=10000&mimetype=application/font-woff"
			},
      {
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "file-loader"
			}
		]
	},
	plugins: [
		extractSass,
		new webpack.EnvironmentPlugin([
			'NODE_ENV'
		]),
    new HtmlWebpackPlugin({
			template: path.join(__dirname, sourceFolder, "index.html"),
			inject: true,
			filename: path.join(__dirname, distFolder, "index.html"),
		}),
		new webpack.optimize.CommonsChunkPlugin({
		  name: "commons",
		  filename: "commons-[hash].js"
		})
	],
  devServer: {
		port: PORT,
		host: HOST,
		historyApiFallback: true,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		}
	}
}
