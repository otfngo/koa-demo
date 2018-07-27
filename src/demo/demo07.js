const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

app.use(bodyParser())
app.use(async ctx => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    let html = `
      <h1>koa bodyparser</h1>
      <form method="POST" action="/">
        Name: <input name="name"><br>
        Age: <input name="age"><br>
        Email: <input name="email"><br>
        <button type="submit">submitt</button>
      </form>
    `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当 POST 请求的时候，中间件 koa-bodyparser 解析 POST 表单里的数据
    // 并显示出来
    ctx.body = ctx.request.body
  } else {
    ctx.body = '<h1>404 Not Found</h1>'
  }
})

app.listen(3000)