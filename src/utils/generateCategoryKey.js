const { normalizeText } = require("./normalize");
const { standardizeUnits } = require("./standardizeUnits");

function generateCategoryKey(title) {
  const standardizedTitle = standardizeUnits(normalizeText(title));
  return standardizedTitle.split(" ").sort().join(" ");
}

module.exports = { generateCategoryKey };
