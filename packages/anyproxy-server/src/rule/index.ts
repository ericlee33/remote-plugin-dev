const DEFAULT_PORT = 11111;
import { execSync } from 'child_process';

module.exports = {
  rule: {
    beforeSendResponse: async (requestDetail, responseDetail) => {
      if (requestDetail.url.includes('/cdn/remoteEntry.js')) {
        responseDetail.response.body = await execSync(
          `curl -s http://localhost:9001/remoteEntry.js`
        );
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
