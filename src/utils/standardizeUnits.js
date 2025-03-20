// Função para padronizar unidades de medida
function standardizeUnits(title) {
  return title
    .replace(/\b1000g\b/gi, "1kg")
    .replace(/\b1 quilo\b/gi, "1kg")
    .replace(/\b5 quilos\b/gi, "5kg")
    .replace(/\b1 litro\b/gi, "1l")
    .replace(/\b2 litros\b/gi, "2l");
}

module.exports = { standardizeUnits };
