const { normalizeTitle } = require("./normalize");

const categories = new Set([
  "leite",
  "arroz",
  "feijao",
  "cafe",
  "acucar",
  "oleo",
  "macarrao",
  "farinha",
]);

const characteristics = new Set([
  "integral",
  "desnatado",
  "semi-desnatado",
  "branco",
  "carioca",
  "tipo",
  "kg",
  "l",
  "litro",
  "quilo",
]);

const extractAttributes = (title) => {
  const words = normalizeTitle(title).split(" ");

  const quantity = words.find((word) => /\d+(l|kg|litro|quilo)/.test(word));
  const type = words.find((word) =>
    ["integral", "desnatado", "semi"].includes(word)
  );
  const brand = words.find(
    (word) =>
      !categories.has(word) && !characteristics.has(word) && word !== quantity
  );

  const category = `${words
    .filter((w) => w !== quantity && w !== type && w !== brand)
    .join(" ")} ${brand || ""} ${type || ""} ${quantity || ""}`.trim();

  return { category, title };
};

module.exports = { extractAttributes };
