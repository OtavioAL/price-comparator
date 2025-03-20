// Função para padronizar unidades de medida
function standardizeUnits(title) {
  return title
    .replace(/\b1000g\b/gi, "1kg") // Transforma "1000g" em "1kg"
    .replace(/\b1 quilo\b/gi, "1kg") // Transforma "1 Quilo" em "1kg"
    .replace(/\b1 litro\b/gi, "1l") // Transforma "1 Litro" em "1L"
    .replace(/\b2 litros\b/gi, "2l"); // Transforma "2 Litros" em "2L"
}

module.exports = { standardizeUnits };
