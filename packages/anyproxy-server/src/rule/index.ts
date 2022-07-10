const DEFAULT_PORT = 11111;

module.exports = {
  rule: {
    beforeSendResponse: (requestDetail, responseDetail) => {
      if (requestDetail.url.includes('/api/plugin_detail')) {
        const data = JSON.parse(responseDetail.response.body.toString());
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
};
