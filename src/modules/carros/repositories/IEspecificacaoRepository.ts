import { Especificacao } from "../model/Especificacao";

interface ICriarEspecificacaoDTO {
  nome: string;
  descricao: string;
}

interface IEspecificacaoRepository {
  obterTodos(): Especificacao[];
  obterPorNome(nome: string): Especificacao;
  criar({ nome, descricao }: ICriarEspecificacaoDTO): void;
}
export { IEspecificacaoRepository, ICriarEspecificacaoDTO };
