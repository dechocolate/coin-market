'use strict';

import express from 'express';

const common = require('./common');
const exchange = require('./exchange');

const api = express.Router(); // 라우터 분리

api.use('/common', common);
api.use('/exchange', exchange);

module.exports = api;