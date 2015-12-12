var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./client/redux/main.js",
    output: {
        path: __dirname,
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
    ]
};
