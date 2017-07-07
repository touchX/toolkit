var { version } = require('./package.json');

var cdnUrl = '//www.sky.com/assets/toolkit/v' + version + '/toolkit.min.css';
var cdnTag = '<link rel="stylesheet" href="' + cdnUrl + '">';

module.exports = {
    cdnUrl,
    cdnTag
};
