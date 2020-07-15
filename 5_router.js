const Koa = require('koa')
const app = new Koa()

const Router = require('koa-router')
const router = new Router({
    prefix : '/test'
})
router.get('/abc', (ctx, next) => {
    console.log(ctx);
    console.log(next);
    ctx.body = '123';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async ctx => {

});

app.listen(3000, ()=>{
    console.log('succeed.');
});