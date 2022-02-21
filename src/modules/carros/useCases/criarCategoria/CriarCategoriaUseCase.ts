import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICategoriaRepository } from "../../repositories/ICategoriaRepository";

interface IRequest {
  nome: string;
  descricao: string;
}

@injectable()
class CriarCategoriaUseCase {
  constructor(
    @inject("CategoriaRepository")
    private categoriaRepository: ICategoriaRepository
  ) {}

  async execute({ nome, descricao }: IRequest): Promise<void> {
    const categoriaJaExiste = await this.categoriaRepository.obterPorNome(nome);

    if (categoriaJaExiste) {
      throw new AppError("Categoria já existe!");
    }

    await this.categoriaRepository.criar({ nome, descricao });
  }
}

export { CriarCategoriaUseCase };
