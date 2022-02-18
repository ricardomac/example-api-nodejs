import { Categoria } from "../../entities/Categoria";
import { ICategoriaRepository } from "../../repositories/ICategoriaRepository";

class ListarCategoriasUseCase {
  constructor(private categoriasRepository: ICategoriaRepository) {}

  execute(): Categoria[] {
    const categorias = this.categoriasRepository.obterTodos();

    return categorias;
  }
}

export { ListarCategoriasUseCase };
