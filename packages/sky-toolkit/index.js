var version = require('./package.json').version;
var skyToolkitCore = require('sky-toolkit-core');

var cdnUrl = '//www.sky.com/assets/toolkit/v' + version + '/toolkit.min.css';
var cdnTag = '<link rel="stylesheet" href="' + cdnUrl + '">';

var skyToolkitCoreCdnUrl = skyToolkitCore.cdnUrl;
var skyToolkitCoreCdnTag = skyToolkitCore.cdnTag;

module.exports = {
    cdnUrl,
    cdnTag,
    skyToolkitCoreCdnUrl,
    skyToolkitCoreCdnTag
};
