function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^a-z0-9\s]/gi, "") // Remove caracteres especiais
    .trim();
}

module.exports = { normalizeText };
