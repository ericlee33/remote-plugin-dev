// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCors from '../../../app/middleware/cors';

declare module 'egg' {
  interface IMiddleware {
    cors: typeof ExportCors;
  }
}
