import { inject, injectable } from "tsyringe";

import { Categoria } from "../../entities/Categoria";
import { ICategoriaRepository } from "../../repositories/ICategoriaRepository";

@injectable()
class ListarCategoriasUseCase {
  constructor(
    @inject("CategoriaRepository")
    private categoriasRepository: ICategoriaRepository
  ) {}

  async execute(): Promise<Categoria[]> {
    const categorias = await this.categoriasRepository.obterTodos();

    return categorias;
  }
}

export { ListarCategoriasUseCase };
