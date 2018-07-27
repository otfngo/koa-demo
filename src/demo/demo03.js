const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  // 相当于：
  // if (!ctx.request.accepts('xml')) ctx.throw(406)
  ctx.assert(ctx.request.accepts('xml'), 406)
  await next()
})

app.use(async ctx => {
  ctx.body = 'hello world'
})

app.listen(3000)