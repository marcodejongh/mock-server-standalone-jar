var json = require('./package.json');
var path = require('path');

module.exports = {
  path: path.resolve(__dirname, 'jar/mockserver-netty-' + json.version + '.jar'),
  version: json.version
};
