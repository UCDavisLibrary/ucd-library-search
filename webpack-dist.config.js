let config = require('@ucd-lib/cork-app-build').dist({
  root : __dirname,
  entry : 'elements/ucd-library-search.js',
  dist : 'dist',
  clientModules : 'elements/node_modules'
});

module.exports = config;