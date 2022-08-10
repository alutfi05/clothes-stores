const categoryRoute = require("express").Router();
const { CategoryController } = require("../controllers");

categoryRoute.get("/", CategoryController.getCategories);
categoryRoute.get("/create", CategoryController.createPage);
categoryRoute.post("/create", CategoryController.create);
categoryRoute.get("/delete/:categoryId", CategoryController.delete);
categoryRoute.get("/update/:categoryId", CategoryController.updatePage);
categoryRoute.post("/update/:categoryId", CategoryController.update);

module.exports = categoryRoute;
