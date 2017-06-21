var path = require('path');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, '_all.scss');
sassTrue.runSass({file: sassFile, includePaths: ['node_modules/', '../sky-toolkit-core/node_modules']}, describe, it);
