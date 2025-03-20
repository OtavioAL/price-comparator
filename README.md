# 🛒 Comparador de Preços

Este projeto tem como objetivo identificar e categorizar produtos de supermercados, mesmo quando possuem nomes com pequenas variações. O algoritmo agrupa produtos equivalentes, separando-os corretamente por tipo, marca e quantidade.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **JavaScript**
- **string-similarity**
- **Natural**

## 📥 Instalação

Para rodar o projeto localmente, siga os passos abaixo:

```sh
# Clone este repositório
$ git clone https://github.com/OtavioAL/price-comparator.git

# Acesse a pasta do projeto
$ cd price-comparator

# Instale as dependências
$ npm install
```

## 🚀 Como Usar

1. Adicione os produtos no arquivo `data/data01.json`.
2. Execute o script principal:

```sh
$ node src/index.js
```

3. O resultado será um JSON no console, mostrando os produtos agrupados por categorias.

## 📌 Exemplo de Saída

```json
[
  {
    "category": "Leite Integral Piracanjuba 1L",
    "count": 2,
    "products": [
      {
        "title": "Leite Integral Piracanjuba 1L",
        "supermarket": "Supermercado A"
      },
      {
        "title": "Leite Piracanjuba Integral 1L",
        "supermarket": "Supermercado B"
      }
    ]
  },
  {
    "category": "Arroz Branco Tio João 5kg",
    "count": 2,
    "products": [
      { "title": "Arroz Branco Tio João 5kg", "supermarket": "Supermercado A" },
      { "title": "Arroz Tio João Branco 5kg", "supermarket": "Supermercado B" }
    ]
  }
]
```

## 📌 Funcionalidades Implementadas

✅ Identifica produtos equivalentes mesmo com variações na descrição.  
✅ Separa produtos por marca, tipo e quantidade.
