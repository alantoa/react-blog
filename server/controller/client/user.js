const skillModel = require("../../mongo/models/skill");

module.exports = {
  
  async skill(ctx, next) {
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
};
