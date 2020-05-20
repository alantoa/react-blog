const router = require('koa-router')()

// const Entity = require('../mongo/controller/user');
//
// const entity = new Entity();
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

