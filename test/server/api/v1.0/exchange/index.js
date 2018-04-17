'use strict';

import express from 'express';
import exchangeCtrl from './exchange.ctrl';

const exchange = express.Router(); // 라우터 분리

exchange.get('/', exchangeCtrl.getInitialExchangeRate);

module.exports = exchange;