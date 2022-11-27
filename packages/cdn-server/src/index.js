const http = require('http');
const Url = require('url');
const fs = require('fs');
const path = require('path');

const httpServer = http.createServer((req, res) => {
  const url = Url.parse(req.url);

  console.log(`Request pathname: ${url.pathname}`);

  res.setHeader('Access-Control-Allow-Origin', '*');

  if (url.pathname === '/cdn/remoteEntry.js') {
    const bundle = fs.readFileSync(path.resolve(__dirname, './cdnFile.js'));
    res.write(bundle);
  } else {
    res.write('not found');
  }
  res.end();
});

httpServer.listen(7001);
console.log('Server running at 7001\n');
