const express = require('express');
const app = express();
// Para utilizar o JSON precisa do midlware
app.use(express.json());

/*
* Tipos de parâmetros
* Route params => Passa na rota tipo o :id, Identifica um recurso editar/deletar/buscar
* Query params => Paginação / Filtro
* Body paramns => Os objetos inserção/alteração (JSON)
*/

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json([ "Curso 1", "Curso 2", "Curso 3" ]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json([ "Curso 1", "Curso 2", "Curso 3", "Curso 4" ]);
});

app.put("/courses/:id", (request, response) => { // Esperando que o id é um parametro
  const params = request.params; //Quebra a rota e mostra o parâmetro id
  console.log(params);
  return response.json([ "Curso 1", "Curso 2", "Curso 3", "Curso 4" ]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json([ "Curso 1", "Curso 2", "Curso 3", "Curso 4" ]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json([ "Curso 1", "Curso 2", "Curso 3", "Curso 4" ]);
});

app.listen(3333);