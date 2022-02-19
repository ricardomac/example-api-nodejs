import { Router } from "express";
import multer from "multer";

import { CriarCategoriaController } from "../modules/carros/useCases/criarCategoria/CriarCategoriaController";
import { ImportarCategoriaController } from "../modules/carros/useCases/importarCategoria/ImportarCategoriaController";
import { ListarCategoriasController } from "../modules/carros/useCases/listarCategorias/ListarCategoriasController";

const categoriasRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const criarCategoriaController = new CriarCategoriaController();
const importarCategoriaController = new ImportarCategoriaController();
const listarCategoriasController = new ListarCategoriasController();

categoriasRoutes.post("/", criarCategoriaController.handle);

categoriasRoutes.get("/", listarCategoriasController.handle);

categoriasRoutes.post(
  "/importar",
  upload.single("file"),
  importarCategoriaController.handle
);

export { categoriasRoutes };
