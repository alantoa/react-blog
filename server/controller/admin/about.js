const aboutModel = require('../../mongo/models/about')


module.exports = {
  async addAbout(ctx, next) {
    console.log('----------------添加博客 addAbout-----------------------');
    let paramsData = ctx.request.body;
    try {
      let data = await ctx.findOne(aboutModel, {
        _id: paramsData._id
      })
      if (data) {
        ctx.sendError('数据已经存在, 请重新添加!')
      } else {
        // paramsData.intro = marked(paramsData.intro);
        await ctx.add(aboutModel, paramsData);
        ctx.send(paramsData)
      }
    } catch (e) {
      ctx.sendError(e)
    }
  },
  async editAbout(ctx, next) {
    console.log('----------------修改个人信息 editAbout-----------------------');
    let paramsData = ctx.request.body;
    try {
      // paramsData.html = marked(paramsData.html);
      await ctx.updateOne(aboutModel, {
        _id: paramsData._id
      }, paramsData)
      ctx.send()
    } catch (e) {
      if (e === '暂无数据') {
        ctx.sendError(e)
      }
    }
  }
}