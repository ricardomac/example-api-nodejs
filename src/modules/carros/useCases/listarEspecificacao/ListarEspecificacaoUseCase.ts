import { Especificacao } from "../../model/Especificacao";
import { IEspecificacaoRepository } from "../../repositories/IEspecificacaoRepository";

class ListarEspecificacaoUseCase {
  constructor(private especificacaoRepository: IEspecificacaoRepository) {}

  execute(): Especificacao[] {
    const especificacoes = this.especificacaoRepository.obterTodos();

    return especificacoes;
  }
}

export { ListarEspecificacaoUseCase };
