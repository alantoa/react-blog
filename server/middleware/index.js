const path = require('path')
const bodyParser = require('koa-bodyparser')
const staticFiles = require('koa-static')
const Rule = require('./rule')

const views = require('koa-views')
const json = require('koa-json')
const logger = require('koa-logger')
const cors = require('koa2-cors');

const onerror = require('koa-onerror')
module.exports = app => {

  //缓存拦截器
  app.use(async (ctx, next) => {
    if (ctx.url == '/favicon.ico') return

    await next()
    ctx.status = 200
    ctx.set('Cache-Control', 'must-revalidation')
    if (ctx.fresh) {
      ctx.status = 304
      return
    }
  })


  // middlewares
  app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
  }))

  //静态文件中间件
  app.use(staticFiles(path.resolve(__dirname, '../../../public')));

  app.use(cors())

  app.use(json())

  app.use(logger())

  // logger


  app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })

  app.use(views(__dirname + '/views', {
    extension: 'pug'
  }))
  // 规则中间件
  Rule({
    app,
    rules: [
      {
        path: path.join(__dirname, '../controller/admin'),
        name: 'admin'
      },
      {
        path: path.join(__dirname, '../controller/client'),
        name: 'client'
      }
    ]
  })

  // 增加错误的监听处理
  // error handler
  onerror(app)
  // error-handling
  app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  });
}
