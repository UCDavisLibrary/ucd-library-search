const path = require('path');

let config = require('@ucd-lib/cork-app-build').watch({
  root : path.join(__dirname, '..'),
  entry : 'ucd-library-search.js',
  preview : 'preview',
  clientModules : 'node_modules',
  modern : 'bundle.js'
});

module.exports = config;