const orderRoute = require("express").Router();
const { OrderController } = require("../controllers");

orderRoute.get("/", OrderController.getOrders);
orderRoute.get("/create", OrderController.createPage);
orderRoute.post("/create", OrderController.create);
orderRoute.get("/delete/:orderId", OrderController.delete);
orderRoute.get("/update/:orderId", OrderController.updatePage);
orderRoute.post("/update/:orderId", OrderController.update);

module.exports = orderRoute;
