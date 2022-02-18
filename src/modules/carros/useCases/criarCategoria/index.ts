import { CategoriaRepository } from "../../repositories/implementations/CategoriaRepository";
import { CriarCategoriaController } from "./CriarCategoriaController";
import { CriarCategoriaUseCase } from "./CriarCategoriaUseCase";

export default (): CriarCategoriaController => {
  const categoriaRepository = new CategoriaRepository();
  const criarCategoriaUseCase = new CriarCategoriaUseCase(categoriaRepository);
  const criarCategoriaController = new CriarCategoriaController(
    criarCategoriaUseCase
  );

  return criarCategoriaController;
};
