const path = require('path');


let entry = '../elements/ucd-library-search.js';

var modern = {
    entry,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '..', 'dist')
    },
    mode: 'production',
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

var ie =  {
    entry,
    output: {
        filename: 'ie-bundle.js',
        path: path.resolve(__dirname, '..', 'dist')
    },
    mode: 'production',
    target : 'web',
    resolve : {
      modules: [path.resolve(__dirname, '..', 'node_modules')]
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
        },
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
        }
      ]
    }
};

module.exports = [modern, ie];