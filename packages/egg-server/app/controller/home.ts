import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this as any;
    ctx.body = await ctx.service.test.sayHi();
  }
}
