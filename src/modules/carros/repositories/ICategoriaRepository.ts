import { Categoria } from "../model/Categoria";

interface ICriarCategoriaDTO {
  nome: string;
  descricao: string;
}

interface ICategoriaRepository {
  obterPorNome(nome: string): Categoria;
  obterTodos(): Categoria[];
  criar({ nome, descricao }: ICriarCategoriaDTO): void;
}

export { ICategoriaRepository, ICriarCategoriaDTO };
