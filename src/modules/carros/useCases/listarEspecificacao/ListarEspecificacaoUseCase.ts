import { inject, injectable } from "tsyringe";

import { Especificacao } from "../../entities/Especificacao";
import { IEspecificacaoRepository } from "../../repositories/IEspecificacaoRepository";

@injectable()
class ListarEspecificacaoUseCase {
  constructor(
    @inject("EspecificacaoRepository")
    private especificacaoRepository: IEspecificacaoRepository
  ) {}

  async execute(): Promise<Especificacao[]> {
    const especificacoes = await this.especificacaoRepository.obterTodos();

    return especificacoes;
  }
}

export { ListarEspecificacaoUseCase };
