import { CategoriaRepository } from "../../repositories/implementations/CategoriaRepository";
import { CriarCategoriaController } from "./CriarCategoriaController";
import { CriarCategoriaUseCase } from "./CriarCategoriaUseCase";

const categoriaRepository = CategoriaRepository.getInstance();
const criarCategoriaUseCase = new CriarCategoriaUseCase(categoriaRepository);
const criarCategoriaController = new CriarCategoriaController(
  criarCategoriaUseCase
);

export { criarCategoriaController };
