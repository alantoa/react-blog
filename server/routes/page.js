const router = require('koa-router')();

const Entity = require('../mongo/index');
const entity = new Entity();
router
    .get('/404', async ctx => ctx.body = '404 page!')
    .get('/helloworld', async (ctx, next) => {
        const start = new Date().getTime()
        await next();
        const ms = new Date().getTime() - start;

        ctx.response.type = 'application/json';
        ctx.body = await entity.query();
    })
    .get('/get', async ctx => {
         console.log('ctx1')
        console.log(ctx.query)
        // Koa2 中 get方法 通过 ctx.query 来获取 xxx?name=123 中name值
        entity.save(ctx.query);
        ctx.body = { mgs: "提交成功", start: 200 , msg:ctx.query};
    })
    .post('/post', async ctx => {
        // Koa2 中 post方法 通过 ctx.request.body 来获取前端传来的参数值
        entity.save(ctx.request.body)
        ctx.body = { mgs: "提交成功", start: 200,msg:ctx.request.body };
    })
    .get('/remove', async ctx => {
        entity.remove(ctx.query);
        ctx.body = { mgs: "删除成功", start: 200 };
    })
    .get('/update', async ctx => {
        const conditions = { name: 'Vexth---get' };
        const updates = { $set: {name: "tiny"} };
        entity.update(conditions, updates);
        ctx.body = { mgs: "修改成功", start: 200 };
    });

module.exports = router;
