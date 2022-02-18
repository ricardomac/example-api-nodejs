import { CategoriaRepository } from "../../repositories/implementations/CategoriaRepository";
import { ImportarCategoriaController } from "./ImportarCategoriaController";
import { ImportarCategoriaUseCase } from "./ImportarCategoriaUseCase";

const categoriaRepository = null;
const importarCategoriaUseCase = new ImportarCategoriaUseCase(
  categoriaRepository
);
const importarCategoriaController = new ImportarCategoriaController(
  importarCategoriaUseCase
);

export { importarCategoriaController };
