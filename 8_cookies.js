const Koa = require('koa')
const app = new Koa()


app.use(async ctx => {
    if(ctx.url === '/test'){
        ctx.cookies.set(
            'name','liq', {
                domain : 'localhost'
            }
        );
        ctx.body = 'cookies ok';
    } else {
        ctx.body = 'no cookies';
    }

    
});



app.listen(3000, ()=>{
    console.log('succeed.');
});