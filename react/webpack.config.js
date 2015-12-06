var webpack = require('webpack');

module.exports = {
  entry: {
    index: './index.jsx'
  },
  output: {
    path: './build/js',
    filename: '[name].build.js',
  },
  module: {
    loaders: [
      { 
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};