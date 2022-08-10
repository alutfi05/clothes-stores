require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static("public"));

app.use(routes);

app.listen(port, () => {
    console.log(`Clothes Stores App listening on port ${port}`);
});
