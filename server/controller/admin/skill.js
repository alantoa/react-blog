const skillModel = require('../../mongo/models/skills')


module.exports = {
  async addSkill(ctx, next) {
    console.log('----------------添加技能 addSkill-----------------------');
    let paramsData = ctx.request.body;
    try {
      let data = await ctx.findOne(skillModel, {
        _id: paramsData._id
      })
      if (data) {
        ctx.sendError('数据已经存在, 请重新添加!')
      } else {
        await ctx.add(skillModel, paramsData);
        ctx.send(paramsData)
      }
    } catch (e) {
      ctx.sendError(e)
    }
  },
  async list(ctx, next) {
    console.log('----------------获取技能列表 skills/list-----------------------');
    try {
      let data = await ctx.find(skillModel);
      ctx.send(data)
    } catch (e) {
      console.log(e)
      ctx.sendError(e)
    }
  },
}