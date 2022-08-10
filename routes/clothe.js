const clotheRoute = require("express").Router();
const { ClotheController } = require("../controllers");

clotheRoute.get("/", ClotheController.getClothes);
clotheRoute.get("/create", ClotheController.createPage);
clotheRoute.post("/create", ClotheController.create);
clotheRoute.get("/delete/:clotheId", ClotheController.delete);
clotheRoute.get("/update/:clotheId", ClotheController.updatePage);
clotheRoute.post("/update/:clotheId", ClotheController.update);

module.exports = clotheRoute;
