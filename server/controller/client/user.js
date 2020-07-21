const skillModel = require("../../mongo/models/skill");
const aboutModel = require("../../mongo/models/about");

module.exports = {
  
  async skill(ctx, next) {
    console.log(
      "----------------获取技能列表 skills/list-----------------------"
    );
    let { status } = ctx.request.query;
    try {
      let data = await ctx.find(skillModel,status?{status}:null);
      ctx.send(data);
    } catch (e) {
      console.log(e);
      ctx.sendError(e);
    }
  },
  async info(ctx, next) {
    console.log("----------------获取简介 addAbout-----------------------");
    let name = ctx.params.name;
    try {
      let data = await ctx.findOne(aboutModel, { name });
      console.log(data);
      ctx.send(data);
    } catch (e) {
      ctx.sendError(e);
    }
  },
};
