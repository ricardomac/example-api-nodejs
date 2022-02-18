import { Categoria } from "../entities/Categoria";

interface ICriarCategoriaDTO {
  nome: string;
  descricao: string;
}

interface ICategoriaRepository {
  obterPorNome(nome: string): Promise<Categoria>;
  obterTodos(): Promise<Categoria[]>;
  criar({ nome, descricao }: ICriarCategoriaDTO): Promise<void>;
}

export { ICategoriaRepository, ICriarCategoriaDTO };
