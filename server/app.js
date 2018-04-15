'use strict';

import express from 'express';

const app = express();

app.use('/', express.static(__dirname + '/../client'));

app.listen(3000, () => {
  console.info('listening on port 3000!');
});