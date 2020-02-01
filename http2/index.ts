import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/index.ts";

const app = new Application();

async function main() {
  app.use((ctx, next) => {
    console.log(ctx.request.method, ctx.request.url);
    next();
  });

  app.use(router.routes());
  app.use(router.allowedMethods());

  await app.listen("0.0.0.0:4000");
}

main();
