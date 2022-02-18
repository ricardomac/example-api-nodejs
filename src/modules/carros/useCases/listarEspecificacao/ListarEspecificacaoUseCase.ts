import { Especificacao } from "../../entities/Especificacao";
import { IEspecificacaoRepository } from "../../repositories/IEspecificacaoRepository";

class ListarEspecificacaoUseCase {
  constructor(private especificacaoRepository: IEspecificacaoRepository) {}

  execute(): Especificacao[] {
    const especificacoes = this.especificacaoRepository.obterTodos();

    return especificacoes;
  }
}

export { ListarEspecificacaoUseCase };
