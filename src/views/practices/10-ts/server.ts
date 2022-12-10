import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import data from "./corona.json" assert { type: "json" };

const router = new Router();
router
  .get("/api", (context) => {
    let min = 0, max = 0, sum = 0, mean = 0;
    for (const item of data) {
      if (item.amount < min) min = item.amount;
      if (item.amount > max) max = item.amount;
      sum += item.amount;
    }
    mean = sum / data.length;
    context.response.body = {
      data: data,
      min: min,
      max: max,
      sum: sum,
      mean: mean,
    };
  });

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
