const { generateCategoryKey } = require("../utils/generateCategoryKey");
const { normalizeText } = require("../utils/normalize");
const { similarity } = require("../utils/similarity");

function categorizeProducts(products) {
  let categories = [];

  products.forEach((product) => {
    //Criando uma chave unica para cada categoria (sem importar a ordem)
    const categoryKey = generateCategoryKey(product.title ?? "");
    const normalizedTitle = normalizeText(product.title);

    let matchedCategory = categories.find(
      (cat) =>
        categoryKey.includes(cat.categoryKey) ||
        similarity(normalizeText(cat.category), normalizedTitle)
    );

    if (!matchedCategory) {
      matchedCategory = {
        category: product.title,
        categoryKey,
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

  categories.forEach((category) => delete category.categoryKey);

  return categories;
}

module.exports = { categorizeProducts };
