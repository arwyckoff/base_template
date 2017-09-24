const webpack = require('webpack');
const path = require('path');

var bower_base = './bower_components/';
var npm_base = './node_modules/';

module.exports = {
  entry: {
    app: [
      npm_base + "jquery/src/jquery.js",
      __dirname + "/app/assets/js/src/app.js"
    ]
  },
  output: {
    path: __dirname + "/app/assets/js/build/",
    filename: "app.js"
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.scss$/,
        loader: "css-loader!sass-loader"
      }
    ]
  },
  externals: {
    "jquery": "jQuery"
  }
}

