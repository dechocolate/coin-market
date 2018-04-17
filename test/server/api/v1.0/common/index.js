'use strict';

import express from 'express';
import commonCtrl from './common.ctrl';

const common = express.Router(); // 라우터 분리

common.get('/currency-info', commonCtrl.getCurrencyInfo);

module.exports = common;
