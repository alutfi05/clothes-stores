const route = require("express").Router();
const categoryRoutes = require("./category");
const clotheRoutes = require("./clothe");
const customerRoutes = require("./customer");
const orderRoutes = require("./order");

route.get("/", (req, res) => {
    res.render("index.ejs");
});

route.use("/categories", categoryRoutes);
route.use("/clothes", clotheRoutes);
route.use("/customers", customerRoutes);
route.use("/orders", orderRoutes);

module.exports = route;
