const path = require('path'),
  fs = require('fs'),
  webpack = require('webpack');


const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      {test: /\.less$/, use: [ 'style-loader', 'css-loader', 'less-loader' ]},
      {test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'},
      {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({})
  ]
}

module.exports = config;