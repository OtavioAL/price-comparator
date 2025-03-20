const fs = require("fs");
const path = require("path");
const { categorizeProducts } = require("./services/categorizeProducts");

const OUTPUT_SPACING = 2;

const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/data01.json"), "utf-8")
);

const categorizedProducts = categorizeProducts(products);

console.log(JSON.stringify(categorizedProducts, null, OUTPUT_SPACING));
