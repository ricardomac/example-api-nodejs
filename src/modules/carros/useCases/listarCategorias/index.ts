import { CategoriaRepository } from "../../repositories/implementations/CategoriaRepository";
import { ListarCategoriasController } from "./ListarCategoriasController";
import { ListarCategoriasUseCase } from "./ListarCategoriasUseCase";

const categoriaRepository = null;
const listarCategoriasUseCase = new ListarCategoriasUseCase(
  categoriaRepository
);
const listarCategoriasController = new ListarCategoriasController(
  listarCategoriasUseCase
);

export { listarCategoriasController };
