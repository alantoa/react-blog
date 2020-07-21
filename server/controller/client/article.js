const articleModel = require("../../mongo/models/article");

const briefModel = {
  title: 1,
  type: 1,
  cover: 1,
  desc: 1,
  github: 1,
  tag: 1,
  releaseTime: 1,
};
const detailModel = {
  title: 1,
  type: 1,
  cover: 1,
  desc: 1,
  github: 1,
  toc:1,
  tag: 1,
  releaseTime: 1,
  html:1,
  source:1,
};

module.exports = {
  async swiper(ctx, next) {
    console.log(
      "----------------获取博客列表 /blog/list-----------------------"
    );
    let { type = 0, pageindex = 1, pagesize = 5 } = ctx.request.query;
    console.log(
      `type:  ${type}  ,  pageindex:  ${pageindex}  ,  pagesize:  ${pagesize}`
    );
    try {
      let data = await ctx.find(
        articleModel,
        { isVisible: true, source: 0 },
        { ...briefModel },
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
  async list(ctx, next) {
    console.log(
      "----------------获取博客列表 /blog/list-----------------------"
    );
    let { type = 0, pageindex = 1, pagesize = 5 } = ctx.request.query;
    console.log(
      `type:  ${type}  ,  pageindex:  ${pageindex}  ,  pagesize:  ${pagesize}`
    );
    try {
      let data = await ctx.findPage(
        articleModel,
        { isVisible: true },
        { ...briefModel },
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
  async recommend(ctx, next) {
    console.log(
      "----------------获取博客列表 /blog/list-----------------------"
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
        { ...briefModel },
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
  async detail(ctx, next) {
    console.log(
      "----------------获取博客信息 /blog/info-----------------------"
    );
    let id = ctx.params.id
    try {
        let data = await ctx.findById(articleModel, id,{...detailModel});
        
        return ctx.send(data);
    } catch (e) {
        return ctx.sendError(e)
    }
  },
};
