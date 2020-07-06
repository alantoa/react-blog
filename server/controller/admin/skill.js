const skillModel = require("../../mongo/models/skill");

module.exports = {
  async add(ctx, next) {
    console.log("----------------添加技能 addSkill-----------------------");
    let paramsData = ctx.request.body;
    try {
      let data = await ctx.findOne(skillModel, {
        type: paramsData.type,
      });
      if (data) {
        ctx.sendError("数据已经存在, 请重新添加!");
      } else {
        await ctx.add(skillModel, paramsData);
        ctx.send(paramsData);
      }
    } catch (e) {
      ctx.sendError(e);
    }
  },
  async list(ctx, next) {
    console.log(
      "----------------获取技能列表 skills/list-----------------------"
    );
    try {
      let data = await ctx.find(skillModel);
      ctx.send(data);
    } catch (e) {
      console.log(e);
      ctx.sendError(e);
    }
  },
  async update(ctx, next) {
    console.log("----------------更新技能 skill/update-----------------------");
    let paramsData = ctx.request.body;
    try {
      await ctx.updateOne(
        skillModel,
        {
          _id: paramsData._id,
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
  async del(ctx, next) {
    console.log("----------------删除技能 skill/del-----------------------");
    let id = ctx.request.query.id;
    console.log(id);
    try {
      ctx.deleteOne(skillModel, {
        _id: id,
      });
      ctx.send();
    } catch (e) {
      ctx.sendError(e);
    }
  },
};
