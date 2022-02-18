import { Especificacao } from "../../entities/Especificacao";
import {
  ICriarEspecificacaoDTO,
  IEspecificacaoRepository,
} from "../IEspecificacaoRepository";

class EspecificacaoRepository implements IEspecificacaoRepository {
  private especificacoes: Especificacao[];

  private static INSTANCE: EspecificacaoRepository;

  private constructor() {
    this.especificacoes = [];
  }

  public static getInstance(): EspecificacaoRepository {
    if (!EspecificacaoRepository.INSTANCE) {
      EspecificacaoRepository.INSTANCE = new EspecificacaoRepository();
    }
    return EspecificacaoRepository.INSTANCE;
  }

  obterPorNome(nome: string): Especificacao {
    const especificacao = this.especificacoes.find(
      (especificacao) => especificacao.nome === nome
    );
    return especificacao;
  }

  obterTodos(): Especificacao[] {
    return this.especificacoes;
  }

  criar({ nome, descricao }: ICriarEspecificacaoDTO): void {
    const especificacao = new Especificacao();

    Object.assign(especificacao, {
      nome,
      descricao,
      criado_em: new Date(),
    });

    this.especificacoes.push(especificacao);
  }
}

export { EspecificacaoRepository };
