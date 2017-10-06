import express from 'express';
import path from 'path';
import fallback from 'express-history-api-fallback';

import {SERVERCONFIG} from './config';
const {port, nodeEnv} = SERVERCONFIG;

let app = express();

// static files
let root = path.resolve(__dirname, './build/');
app.use(express.static(root));

// SPA refresh 404 resolution
app.use(fallback('index.html', {root}));

// server start
if (!module.parent) {
    app.listen(port, function () {
        console.log('\n Express app listening on port ' + port + '.');
    });
}
