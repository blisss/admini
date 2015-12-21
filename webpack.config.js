var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./app/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
								test: /\.jsx?$/,
								loader: "babel",
								query: {
										cacheDirectory: true,
										presets: ["es2015", "react"]
								}
						},
						{
								test: /\.css$/,
								loader: ExtractTextPlugin.extract("style", "css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]&-minimize")
						}
        ]
    },
    plugins: [				
				new ExtractTextPlugin("[name].css", { allChunks: true })
    ],
		resolve: {
				extensions: ["", ".js", ".json", ".jsx"]
		}
};
