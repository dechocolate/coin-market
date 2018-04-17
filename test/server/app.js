'use strict';

import express from 'express';
import axios from 'axios'; // promised based requests - like fetch()
import bodyParser from 'body-parser';
import api from './api';


const app = express();
const router = express.Router(); // 라우터 분리

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// app.use(express.static(__dirname + '/../client'));
app.use('/api', api);

app.use((req, res) => { // 404 처리 부분
	res.status(404).send('not found');
});

// router.all('/*', (req, res, next) => {
//   if (req.originalUrl.includes('/api/')) { // api 호출시에는 캐시 블락
//     res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
//     res.header('Pragma', 'no-cache');
//     res.header('Expires', 0);
//     next();
//   } else {
//     res.sendFile('index.html', { root: path.resolve(__dirname, '../../client/dist') });
//   }
// });

app.listen(3001, () => {
  console.info('listening on port 3001!');
});