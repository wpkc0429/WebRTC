//建立簡單server給http呼叫
'use strict';

const http = require('http');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html', 'charset': 'utf-8' });

  res.write('loading...');
  await sleep(2000);
  res.write('wait: 2000ms');
  await sleep(5000);
  res.write('wait: 5000ms');
  res.end();
});

app.listen(3000);
