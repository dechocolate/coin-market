'use strict';

import currencyInfo from '~/lib/poloniex/currencyInfo';
// const { getExchangeRate } = require('lib/common');

exports.getCurrencyInfo = (req, res) => {
  res.status(200).send(currencyInfo);
};
