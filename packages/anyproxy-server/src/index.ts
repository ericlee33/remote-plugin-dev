const AnyProxy = require('anyproxy');
const rule = require('./rule/index');

const proxyServer = new AnyProxy.ProxyServer(rule);

proxyServer.on('ready', () => {
  /* */
});
proxyServer.on('error', (e) => {
  /* */
});
proxyServer.start();
