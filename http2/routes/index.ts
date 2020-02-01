import { Router } from "https://deno.land/x/oak/mod.ts";
const router = new Router();

router
  .get("/", context => {
    context.response.body = "Hello World";
  })
  .get("/book", context => {
    context.response.body = [
      {
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle"
      }
    ];
  })
  .post("/book", async context => {
    // const body = await context.request.body();
    // console.log(body)
    context.response.body = "received";
  })
  .get("/posts", async context => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data)
    context.response.body = data;
  });

export default router;
