import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { OrderController } from "./controllers/order.controller";
import { BakingController } from "./controllers/baking.controller";

const app = createExpressServer({
  controllers: [OrderController, BakingController],
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
