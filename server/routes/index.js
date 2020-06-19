const router = require('koa-router')()


module.exports = app => {
  /** 
   * Admin 后台接口 *********************************************
   */
  // 登录接口
  router.post('/user/login', app.admin.user.login)
  // 文章 Article 接口
  router.post(`/add`, app.admin.article.add)
  router.post(`/list`, app.admin.article.add)
  router.post(`/update`, app.admin.article.add)
  router.post(`/del`, app.admin.article.add)

  //关于 About 接口

  router.post(`/addAbout`, app.admin.about.addAbout)
  router.post(`/editAbout`, app.admin.about.editAbout)

  

  /** 
   * Client 前台接口 *********************************************
   */
  router.get(`/list`, app.client.article.list)
  router.get(`/info`, app.client.article.info)
  app.use(router.routes()).use(router.allowedMethods());
}