// For sync vs async = https://adrianmejia.com/images/synchronous-asynchronous-javascript.png

const { readFileSync, writeFileSync, readFile} = require('fs');

const first = readFileSync('./contents/first.txt','utf8');
const second = readFileSync('./contents/second.txt','utf8');


writeFileSync('contents/result-sync.txt',`Here is the result : ${first},${second}`);