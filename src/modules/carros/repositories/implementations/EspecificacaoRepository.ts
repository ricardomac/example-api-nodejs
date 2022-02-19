import { getRepository, Repository } from "typeorm";

import { Especificacao } from "../../entities/Especificacao";
import {
  ICriarEspecificacaoDTO,
  IEspecificacaoRepository,
} from "../IEspecificacaoRepository";

class EspecificacaoRepository implements IEspecificacaoRepository {
  private repository: Repository<Especificacao>;

  constructor() {
    this.repository = getRepository(Especificacao);
  }

  async obterPorNome(nome: string): Promise<Especificacao> {
    const especificacao = this.repository.findOne({ nome });
    return especificacao;
  }

  async obterTodos(): Promise<Especificacao[]> {
    const especificacoes = await this.repository.find();
    return especificacoes;
  }

  async criar({ nome, descricao }: ICriarEspecificacaoDTO): Promise<void> {
    const especificacao = this.repository.create({
      descricao,
      nome,
    });

    await this.repository.save(especificacao);
  }
}

export { EspecificacaoRepository };
