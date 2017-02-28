var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:1337',
      APP_DIR + '/index.jsx'
    ]
  },
  output: {
    filename: 'build/[name].js'
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