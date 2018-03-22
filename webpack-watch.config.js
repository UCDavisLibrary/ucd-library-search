let config = require('@ucd-lib/cork-app-build').watch({
  root : __dirname,
  entry : 'elements/ucd-library-search.js',
  preview : 'preview',
  clientModules : 'elements/node_modules'
});

module.exports = config;