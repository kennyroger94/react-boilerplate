var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: {
    bundle: APP_DIR + '/index.jsx'
  },
  output: {
    filename: BUILD_DIR + '/[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['react-hot-loader', 'babel-loader']
      }
    ]
  }
};

module.exports = config;