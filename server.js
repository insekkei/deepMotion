'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressHistoryApiFallback = require('express-history-api-fallback');

var _expressHistoryApiFallback2 = _interopRequireDefault(_expressHistoryApiFallback);

var _config = require('./config');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var port = _config.SERVERCONFIG.port,
    nodeEnv = _config.SERVERCONFIG.nodeEnv;

var app = (0, _express2.default)();

// static files
var root = _path2.default.resolve(__dirname, './build/');
app.use(_express2.default.static(root));

// SPA refresh 404 resolution
app.use((0, _expressHistoryApiFallback2.default)('index.html', { root: root }));

// server start
if (!module.parent) {
    app.listen(port, function () {
        console.log('\n Express app listening on port ' + port + '.');
    });
}
