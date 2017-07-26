'use strict';

// load modules
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './source'),
  entry: {
    'main': './public/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/public/js'),
    filename: '[name].js',
    publicPath: '/assets'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-0'] }
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './')
  }
};