const articleModel = require("../../mongo/models/article");

module.exports = {
  async list(ctx, next) {
    console.log(
      "----------------获取博客列表 client_demo_api/blog/list-----------------------"
    );
    let { type = 0, pageindex = 1, pagesize = 5 } = ctx.request.query;
    console.log(
      `type:  ${type}  ,  pageindex:  ${pageindex}  ,  pagesize:  ${pagesize}`
    );
    try {
      let data = await ctx.find(
        articleModel,
        type
          ? {
              type,
              isVisible: true,
              source: 1,
            }
          : { isVisible: true, source: 1 },
        null,
        {
          limit: pagesize * 1,
          skip: (pageindex - 1) * pagesize,
          sort: {
            level: -1,
            createTime: -1,
          },
        }
      );

      return ctx.send(data);
    } catch (e) {
      console.log(e);
      return ctx.sendError(e);
    }
  },
  async info(ctx, next) {
    console.log(
      "----------------获取博客信息 client_demo_api/blog/info-----------------------"
    );
    // let _id = ctx.request.query._id;
    // try {
    //     let data = await ctx.findOne(articleModel, { _id });
    //     return ctx.send(data);
    // } catch (e) {
    //     return ctx.sendError(e)
    // }
    ctx.body = {
      title: ctx,
    };
  },
};
