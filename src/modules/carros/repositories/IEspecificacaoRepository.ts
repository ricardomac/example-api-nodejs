import { Especificacao } from "../entities/Especificacao";

interface ICriarEspecificacaoDTO {
  nome: string;
  descricao: string;
}

interface IEspecificacaoRepository {
  obterTodos(): Promise<Especificacao[]>;
  obterPorNome(nome: string): Promise<Especificacao>;
  criar({ nome, descricao }: ICriarEspecificacaoDTO): Promise<void>;
}
export { IEspecificacaoRepository, ICriarEspecificacaoDTO };
