const router = require('koa-router')()


module.exports = app => {
  /** 
   * Admin 后台接口 *********************************************
   */
  // 文章 Article 接口
  router.post(`/admin_api/add`, app.admin.article.add)
  router.post(`/admin_api/list`, app.admin.article.add)
  router.post(`/admin_api/update`, app.admin.article.add)
  router.post(`/admin_api/del`, app.admin.article.add)

  //关于 About 接口

  router.post(`/admin_api/addAbout`, app.admin.about.addAbout)
  router.post(`/admin_api/editAbout`, app.admin.about.editAbout)

  

  /** 
   * Client 前台接口 *********************************************
   */
  router.get(`/client_api/list`, app.client.article.list)
  router.get(`/client_api/info`, app.client.article.info)
  app.use(router.routes()).use(router.allowedMethods());
}