import Koa, { Context } from "koa";

const app = new Koa();

app.use(async (ctx: Context) => {
  ctx.body = "Hello world";
});

const port: number = 3000;
app.listen(port);


console.log(12312321312);