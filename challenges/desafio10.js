db.produtos.find(
  { valoresNutricionais: { $elemMatch: { tipo: "proteínas", percentual: { $gt: 30, $lte: 40 } } } },
  { _id: 0, nome: 1 },
);
