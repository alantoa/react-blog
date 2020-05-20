const router = require('koa-router')()
const client = require('../mongo/controller/client/article')
// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })
//
// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })
//
// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: process.env
//   }
// })
console.log(client)
router.get('/list', client.list)
router.get('/info', client.info)
module.exports = router
