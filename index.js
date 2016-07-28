var json = require('./package.json');
var path = require('path');

module.exports = {
  path: path.resolve(__dirname, 'jar/mockserver-netty-3.10.4.jar'),
  version: '3.10.4'
  //TODO: Get these versions in sync again
  // path: path.resolve(__dirname, 'jar/mockserver-netty-' + json.version + '.jar'),
  // version: json.version
};
