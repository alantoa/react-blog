const router = require('koa-router')()


module.exports = app => {
  /** 
   * Admin 后台接口 *********************************************
   */
  // 登录接口
  router.post('/user/login', app.admin.user.login)
  router.get('/user/info', app.admin.user.info)
  router.get('/user/list', app.admin.user.list)
  router.post('/user/add', app.admin.user.add)
  router.put('/user/update', app.admin.user.update)
  router.delete('/user/del', app.admin.user.del)
  // 文章 Article 接口
  router.get(`/article/list`, app.admin.article.list)
  router.post(`/article/add`, app.admin.article.add)
  router.put(`/article/update`, app.admin.article.update)
  router.delete(`/article/del`, app.admin.article.del)

  //关于 About 接口

  router.post(`/addAbout`, app.admin.about.addAbout)
  router.post(`/editAbout`, app.admin.about.editAbout)

  

  /** 
   * Client 前台接口 *********************************************
   */
  // router.get(`/list`, app.client.article.list)
  // router.get(`/info`, app.client.article.info)
  app.use(router.routes()).use(router.allowedMethods());
}