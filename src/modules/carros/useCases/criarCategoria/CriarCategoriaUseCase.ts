import { ICategoriaRepository } from "../../repositories/ICategoriaRepository";

interface IRequest {
  nome: string;
  descricao: string;
}

class CriarCategoriaUseCase {
  constructor(private categoriaRepository: ICategoriaRepository) {}

  execute({ nome, descricao }: IRequest): void {
    const categoriaJaExiste = this.categoriaRepository.obterPorNome(nome);

    if (categoriaJaExiste) {
      throw new Error("Categoria já existe!");
    }

    this.categoriaRepository.criar({ nome, descricao });
  }
}

export { CriarCategoriaUseCase };
