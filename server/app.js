const Koa = require('koa')
const app = new Koa()
//引入中间件
const middleware = require('./middleware/index')
const router = require('./routes/index')
app.use(require('koa-static')(__dirname + '/public'))

middleware(app)




router(app)

module.exports = app
