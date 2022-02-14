import { CategoriaRepository } from "../../repositories/implementations/CategoriaRepository";
import { ListarCategoriasController } from "./ListarCategoriasController";
import { ListarCategoriasUseCase } from "./ListarCategoriasUseCase";

const categoriaRepository = CategoriaRepository.getInstance();
const listarCategoriasUseCase = new ListarCategoriasUseCase(
  categoriaRepository
);
const listarCategoriasController = new ListarCategoriasController(
  listarCategoriasUseCase
);

export { listarCategoriasController };
