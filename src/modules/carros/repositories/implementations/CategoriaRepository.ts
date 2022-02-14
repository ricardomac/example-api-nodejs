import { Categoria } from "../../model/Categoria";
import {
  ICategoriaRepository,
  ICriarCategoriaDTO,
} from "../ICategoriaRepository";

class CategoriaRepository implements ICategoriaRepository {
  private categorias: Categoria[] = [];

  private static INSTANCE: CategoriaRepository;

  private constructor() {
    this.categorias = [];
  }

  public static getInstance(): CategoriaRepository {
    if (!CategoriaRepository.INSTANCE) {
      CategoriaRepository.INSTANCE = new CategoriaRepository();
    }
    return CategoriaRepository.INSTANCE;
  }

  criar({ nome, descricao }: ICriarCategoriaDTO): void {
    const categoria = new Categoria();
    Object.assign(categoria, { nome, descricao, criado_em: new Date() });
    this.categorias.push(categoria);
  }

  obterTodos(): Categoria[] {
    return this.categorias;
  }

  obterPorNome(nome: string): Categoria {
    const categoria = this.categorias.find(
      (categoria) => categoria.nome === nome
    );
    return categoria;
  }
}

export { CategoriaRepository };
