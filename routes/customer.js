const customerRoute = require("express").Router();
const { CustomerController } = require("../controllers");

customerRoute.get("/", CustomerController.getCustomers);
customerRoute.get("/create", CustomerController.createPage);
customerRoute.post("/create", CustomerController.create);
customerRoute.get("/delete/:customerId", CustomerController.delete);
customerRoute.get("/update/:customerId", CustomerController.updatePage);
customerRoute.post("/update/:customerId", CustomerController.update);

module.exports = customerRoute;
