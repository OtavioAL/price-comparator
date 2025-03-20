const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const normalizeTitle = (title) => {
  return removeAccents(title.toLowerCase())
    .replace(/[^a-z0-9\s]/g, "") // Remove caracteres especiais
    .split(" ") // Divide em palavras
    .sort() // Ordena as palavras
    .join(" "); // Junta novamente
};

module.exports = { removeAccents, normalizeTitle };
