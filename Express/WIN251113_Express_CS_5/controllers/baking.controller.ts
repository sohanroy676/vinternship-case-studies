import { JsonController, Get, Post, Body, Param } from "routing-controllers";

// 1. Create a BakingController for /baking routes.

// 2. Add a POST /baking/start endpoint to start baking an order.

// 3. Add a GET /baking/status/:id endpoint to check the baking status of an order.

const items = new Map<string, number>();
items.set("Bread", 10);
items.set("Cookies", 10);

interface BakeOrder {
  id: number;
  item: string;
  status: "baking" | "done";
}

const bakeOrders: BakeOrder[] = [];

// Team 2: Baking Team
@JsonController("/baking")
export class BakingController {
  @Get("/")
  getAll() {
    return { status: "success", data: bakeOrders };
  }

  @Post("/start")
  startBaking(@Body() order: Omit<BakeOrder, "id" | "status">) {
    // Check inventory and bake
    const stock = items.get(order.item);
    if (stock === undefined || stock <= 0) {
      return { status: "error", error: "Inventory out of stock" };
    }

    const bakeOrder: BakeOrder = { id: bakeOrders.length, item: order.item, status: "baking" };
    bakeOrders.push(bakeOrder);
    setTimeout(() => (bakeOrder.status = "done"), 10000);
    return { status: "success", data: bakeOrder };
  }

  @Get("/status/:id")
  checkBaking(@Param("id") id: number) {
    if (id < 0 || id >= bakeOrders.length) {
      return { status: "error", error: "Invalid ID" };
    }
    return { status: "success", data: bakeOrders[id].status };
  }
}
