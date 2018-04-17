// const ExchangeRate = require('db/models/ExchangeRate');
import poloniex from '~/lib/poloniex';

exports.getInitialExchangeRate = async (req, res) => {
  try {
    const tickers = await poloniex.getTickers();
    const keys = Object.keys(tickers);
    res.status(200).send(keys);
  } catch (e) {
    res.status(500).send(e);
  }
};

