import { IEspecificacaoRepository } from "../../repositories/IEspecificacaoRepository";

interface IRequest {
  nome: string;
  descricao: string;
}

class CriarEspecificacaoUseCase {
  constructor(private especificacaoRepository: IEspecificacaoRepository) {}

  execute({ nome, descricao }: IRequest): void {
    const especificacaoJaExiste =
      this.especificacaoRepository.obterPorNome(nome);

    if (especificacaoJaExiste) {
      throw new Error("Especificação já existe!");
    }
    this.especificacaoRepository.criar({ nome, descricao });
  }
}

export { CriarEspecificacaoUseCase };
