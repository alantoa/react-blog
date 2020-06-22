const router = require("koa-router")();

module.exports = (app) => {
  /**
   * Admin 后台接口 *********************************************
   */
  // 登录接口
  router.post("/user/login", app.admin.user.login);

  // 管理员接口
  router.get("/admin/user", app.admin.user.list);
  router.post("/admin/user", app.admin.user.add);
  router.put("/admin/user", app.admin.user.update);
  router.delete("/admin/user", app.admin.user.del);
  // 文章 Article 接口
  router.get('/admin/article', app.admin.article.list);
  router.post('/admin/article', app.admin.article.add);
  router.put('/admin/article', app.admin.article.update);
  router.delete('/admin/article', app.admin.article.del);

  //关于 About 接口

  router.post('/addAbout', app.admin.about.addAbout);
  router.post('/editAbout', app.admin.about.editAbout);

  //用户信息
  router.get("/user/info", app.admin.user.info);

  /**
   * Client 前台接口 *********************************************
   */
  router.get('/list', app.client.article.list)
  router.get('/info', app.client.article.info)
  app.use(router.routes()).use(router.allowedMethods());
};
