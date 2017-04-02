/*global __dirname, require, module*/
const webpack = require('webpack');
const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');
const env  = require('yargs').argv.env; // use --env with webpack 2

let libraryName = 'Library';

let plugins = [], outputFile;

if (env === 'build') {
  //plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
  plugins.push(new BabiliPlugin());
  plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

module.exports = config;
