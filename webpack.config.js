const argv = require("yargs").argv;
const path = require("path");
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const basePath = path.resolve(__dirname);
const jsPath = path.resolve(__dirname, "client");
const cssPath = path.resolve(__dirname, "css");
const distPath = path.resolve(__dirname, "dist/js");
const sharedPath = path.resolve(__dirname, "shared");
const isProd = argv.prod;
const min = isProd ? ".min" : "";


let plugins = [
  new WebpackNotifierPlugin(),
  new ExtractTextPlugin("../css/styles" + min + ".css"),
];

if (isProd) {
  plugins = plugins.concat([
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"production"' } }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
  ]);
}

module.exports = {
  cache: true,
  debug: !isProd,
  devtool: isProd ? undefined : "eval",
  entry: path.join(jsPath, "index"),
  output: {
    path: distPath,
    publicPath: "/dist/js",
    filename: "app" + min + ".js",
  },
  resolve: {
    root: [
      jsPath,
      basePath,
    ],
    extensions: ["", ".jsx", ".js", ".scss"],
  },
  recordsPath: path.join(distPath, "webpack.records.json"),
  module: {
    loaders: [
      // JS
      {
        test: /\.(js|jsx)$/,
        include: [jsPath, sharedPath],
        loaders: [
          "babel",
          "eslint",
        ],
      },
      // CSS
      {
        test: /\.scss$/,
        include: [cssPath],
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
      }
    ]
  },
  plugins: plugins,

  eslint: {
    emitError: true,
    emitWarning: true,
  },
  sassLoader: {
    includePaths: [cssPath],
  },
};
