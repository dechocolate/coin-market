'use strict';

import express from 'express';

const api = express.Router(); // 라우터 분리

api.use('/v1.0', require('./v1.0'));

module.exports = api;
