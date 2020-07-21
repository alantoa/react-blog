const aboutModel = require("../../mongo/models/about");

module.exports = {
  async getAbout(ctx, next) {
    console.log("----------------获取简介 addAbout-----------------------");
    let id = ctx.params.id;
    try {
      let data;
      if (id) {
        data = await ctx.findOne(aboutModel, { userId: id } );
      } else {
        data = await ctx.find(aboutModel);
      }
      ctx.send(data);
    } catch (e) {
      ctx.sendError(e);
    }
  },
  async addAbout(ctx, next) {
    console.log(
      "----------------添加个人信息 editAbout-----------------------"
    );
    let paramsData = ctx.request.body;
    console.log(paramsData);
    try {
      if (!paramsData.userId) {
        return ctx.sendError("userId 不能为空!");
      }
      let data = await ctx.findOne(aboutModel, {
        name: paramsData.name,
      });
      if (data) {
        data = await ctx.updateOne(
          aboutModel,
          { userId: paramsData.userId, name: paramsData.name },
          paramsData
        );
        ctx.send("更新成功!");
      } else {
        data = await ctx.add(aboutModel, paramsData);
        ctx.send(paramsData);
      }
    } catch (e) {
      if (e === "暂无数据") {
        ctx.sendError(e);
      }
    }
  },
  async updataAbout(ctx, next) {
    console.log(
      "----------------修改个人信息 editAbout-----------------------"
    );
    let paramsData = ctx.request.body;
    let userId = ctx.params.id;
    try {
      await ctx.updateOne(
        aboutModel,
        {
          userId: userId,
        },
        paramsData
      );
      ctx.send();
    } catch (e) {
      if (e === "暂无数据") {
        ctx.sendError(e);
      }
    }
  },
};
