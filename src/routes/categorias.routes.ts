import { Router } from "express";

import { criarCategoriaController } from "../modules/carros/useCases/criarCategoria";
import { listarCategoriasController } from "../modules/carros/useCases/listarCategorias";

const categoriasRoutes = Router();

categoriasRoutes.post("/", (request, response) => {
  return criarCategoriaController.handle(request, response);
});

categoriasRoutes.get("/", (request, response) => {
  return listarCategoriasController.handle(request, response);
});

export { categoriasRoutes };
