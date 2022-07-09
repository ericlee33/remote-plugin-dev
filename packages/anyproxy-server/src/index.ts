const AnyProxy = require('anyproxy');
const rule = require('./rule/index');

const DEFAULT_PORT = 11111;

const proxyServer = new AnyProxy.ProxyServer({
  rule: {
    beforeSendResponse: (requestDetail, responseDetail) => {
      console.log(requestDetail.url);
      if (requestDetail.url.includes('/plugin')) {
        const data = JSON.parse(responseDetail.response.body.toString());
        console.log(data);
        data.data.url = 'http://localhost:9001/main.bundle.js';
        responseDetail.response.body = JSON.stringify(data);
        return responseDetail;
      } else {
        return responseDetail;
      }
    },
  },
  port: DEFAULT_PORT,
  throttle: 10000,
  forceProxyHttps: true,
  wsIntercept: false, // 不开启websocket代理
  silent: false,
});

proxyServer.on('ready', () => {
  /* */
});
proxyServer.on('error', (e) => {
  /* */
});
proxyServer.start();
