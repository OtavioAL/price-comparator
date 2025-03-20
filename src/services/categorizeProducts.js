const { extractAttributes } = require("../utils/extractAttributes");

const categorizeProducts = (products) => {
  const categories = new Map();

  products.forEach((product) => {
    const { category, title } = extractAttributes(product.title);

    if (!categories.has(category)) {
      categories.set(category, { category, count: 0, products: [] });
    }

    categories
      .get(category)
      .products.push({ title, supermarket: product.supermarket });
    categories.get(category).count += 1;
  });

  return Array.from(categories.values());
};

module.exports = { categorizeProducts };
