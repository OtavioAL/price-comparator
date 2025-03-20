const stringSimilarity = require("string-similarity");

const SIMILARITY_THRESHOLD = 0.8;

const similarity = (titleA, titleB) => {
  const similarity = stringSimilarity.compareTwoStrings(titleA, titleB);
  return similarity > SIMILARITY_THRESHOLD;
};

module.exports = { similarity };
