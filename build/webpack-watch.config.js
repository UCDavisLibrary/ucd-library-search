const path = require('path');

module.exports = {
  entry: '../elements/ucd-library-search.js',
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'preview')
  },
  target : 'web',
  resolve : {
    modules: [path.resolve(__dirname, '..', 'elements', 'node_modules')]
  },
  module : {
    rules: [
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: false
            }
          }
        },
        {
          test: /\.css$/,
          use: [ 'to-string-loader', 'css-loader' ]
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
    ]
  }
};