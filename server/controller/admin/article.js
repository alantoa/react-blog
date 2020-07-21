const articleModel = require('../../mongo/models/article')


module.exports = {
  async list(ctx, next) {
    console.log('----------------获取博客列表 blog/list-----------------------');
    let {
      keyword,
      pageindex = 1,
      pagesize = 10
    } = ctx.request.query;
    // console.log('keyword:'+keyword+','+'pageindex:'+pageindex +','+ 'pagesize:'+pagesize)
    console.log(ctx.sendError)
    try {

      let reg = new RegExp(keyword, 'i')
      let data = await ctx.findPage(articleModel, {
        $or: [{
            type: {
              $regex: reg
            }
          },
          {
            title: {
              $regex: reg
            }
          }
        ]
      }, {
        createTime: 0,
        html: 0
      }, {
        limit: pagesize * 1,
        skip: (pageindex) * pagesize
      });
      ctx.send(data)
    } catch (e) {
      ctx.sendError(e)
    }

  },
  async add(ctx, next) {
    console.log('----------------添加博客 blog/add-----------------------');
    let paramsData = ctx.request.body;
    try {
      let data = await ctx.findOne(articleModel, {
        title: paramsData.title
      })
      if (data) {
        ctx.sendError('数据已经存在, 请重新添加!')
      } else {
        data = await ctx.add(articleModel, paramsData);
        ctx.send(paramsData)
      }
    } catch (e) {
      ctx.sendError(e)
    }
  },
  async update(ctx, next) {
    console.log('----------------更新博客 blog/update-----------------------');
  
    let id = ctx.params.id
    let paramsData = ctx.request.body;
    try {
      await ctx.updateById(articleModel,id, paramsData)
      ctx.send()
    } catch (e) {
      if (e === '暂无数据') {
        ctx.sendError(e)
      }
    }
  },

  async del(ctx, next) {
    console.log('----------------删除博客 blog/del-----------------------');
    let id = ctx.request.query.id
    try {
      ctx.deleteOne(articleModel, {
        _id: id
      })
      ctx.send()
    } catch (e) {
      ctx.sendError(e)
    }
  }

}