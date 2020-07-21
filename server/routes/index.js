const router = require("koa-router")();

module.exports = (app) => {
  /**
   * Admin 后台接口 *********************************************
   */
  // 登录接口
  router.post("/user/login", app.admin.user.login);
  router.get("/user/login", app.admin.user.info);

  // 管理员接口
  router.get("/admin/user", app.admin.user.list);
  router.post("/admin/user", app.admin.user.add);
  router.put("/admin/user", app.admin.user.update);
  router.delete("/admin/user", app.admin.user.del);
  // 文章 Article 接口
  router.get('/admin/article', app.admin.article.list);
  router.post('/admin/article', app.admin.article.add);
  router.put('/admin/article/:id', app.admin.article.update);
  router.delete('/admin/article', app.admin.article.del);
  // 技能接口
  router.get('/admin/skill', app.admin.skill.list);
  router.post('/admin/skill', app.admin.skill.add);
  router.put('/admin/skill/all', app.admin.skill.updateAll);
  router.put('/admin/skill/:id', app.admin.skill.update);
  router.delete('/admin/skill', app.admin.skill.del);
  //关于 About 接口
  router.get('/admin/getAbout/:id?', app.admin.about.getAbout);
  router.post('/admin/addAbout', app.admin.about.addAbout);
  //用户信息
  router.get("/user/info/:name", app.client.user.info);
  router.get('/user/skill', app.client.user.skill);
  /**
   * Client 前台接口 *********************************************
   */
  router.get('/article/detail/:id', app.client.article.detail)
  router.get('/article/swiper', app.client.article.swiper)
  router.get('/article/list', app.client.article.list)
  router.get('/article/recommend', app.client.article.recommend)
  app.use(router.routes()).use(router.allowedMethods());
};
