const path = require('path');

let config = require('@ucd-lib/cork-app-build').dist({
  root : path.join(__dirname, '..'),
  entry : 'ucd-library-search.js',
  dist : 'dist',
  clientModules : 'node_modules'
});

module.exports = config;