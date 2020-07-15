const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    
    let data = '';

    ctx.req.on('data', chunk => {
        data += chunk;
        console.log(data);
        console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
    });

    ctx.req.on('end', ()=> {
        data = decodeURI(data);
        console.log(data);
    });

    ctx.body = {
    };
});

app.listen(3000, ()=>{
    console.log('succeed.');
});