const { normalizeText } = require("../utils/normalize");
const { similarity } = require("../utils/similarity");

function categorizeProducts(products) {
  let categories = [];

  products.forEach((product) => {
    const normalizedTitle = normalizeText(product.title);

    let matchedCategory = categories.find((cat) =>
      similarity(normalizeText(cat.category), normalizedTitle)
    );

    if (!matchedCategory) {
      matchedCategory = {
        category: product.title,
        count: 0,
        products: [],
      };
      categories.push(matchedCategory);
    }

    matchedCategory.count++;
    matchedCategory.products.push({
      title: product.title,
      supermarket: product.supermarket,
    });
  });

  return categories;
}

module.exports = { categorizeProducts };
