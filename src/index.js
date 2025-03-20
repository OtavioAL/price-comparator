const fs = require("fs");
const path = require("path");
const { categorizeProducts } = require("./services/categorizeProducts");

const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/data01.json"), "utf-8")
);

const categorizedProducts = categorizeProducts(products);

console.log(JSON.stringify(categorizedProducts, null, 2));
