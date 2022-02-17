import { Router } from "express";
import multer from "multer";

import { criarCategoriaController } from "../modules/carros/useCases/criarCategoria";
import { importarCategoriaController } from "../modules/carros/useCases/importarCategoria";
import { listarCategoriasController } from "../modules/carros/useCases/listarCategorias";

const categoriasRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriasRoutes.post("/", (request, response) => {
  return criarCategoriaController.handle(request, response);
});

categoriasRoutes.get("/", (request, response) => {
  return listarCategoriasController.handle(request, response);
});

categoriasRoutes.post(
  "/importar",
  upload.single("file"),
  (request, response) => {
    return importarCategoriaController.handle(request, response);
  }
);

export { categoriasRoutes };
