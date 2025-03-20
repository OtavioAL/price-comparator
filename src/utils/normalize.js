const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const normalizeText = (text) => {
  return removeAccents(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "");
};

module.exports = { removeAccents, normalizeText };
