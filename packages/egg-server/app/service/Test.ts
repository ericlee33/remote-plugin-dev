import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi() {
    return {
      code: 0,
      data: {},
      msg: 'ok',
    };
  }
}
