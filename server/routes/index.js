const router = require('koa-router')()
// const app = require('../mongo/controller/client/article')

const api ={
  client:'/client_api',
  admin:'/admin_api'
}


module.exports = app => {
  router.get(`${api.client}/list`, app.client.article.list)
  router.get(`${api.client}/info`, app.client.article.info)
  app.use(router.routes()).use(router.allowedMethods());
}
