export default () => async (ctx, next) => {
  ctx.response.set('Access-Control-Allow-Origin', '*');

  await next();
};
