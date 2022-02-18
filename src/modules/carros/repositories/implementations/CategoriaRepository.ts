import { getRepository, Repository } from "typeorm";

import { Categoria } from "../../entities/Categoria";
import {
  ICategoriaRepository,
  ICriarCategoriaDTO,
} from "../ICategoriaRepository";

class CategoriaRepository implements ICategoriaRepository {
  private repository: Repository<Categoria>;

  constructor() {
    this.repository = getRepository(Categoria);
  }

  async criar({ nome, descricao }: ICriarCategoriaDTO): Promise<void> {
    const categoria = this.repository.create({
      descricao,
      nome,
    });

    await this.repository.save(categoria);
  }

  async obterTodos(): Promise<Categoria[]> {
    const categorias = await this.repository.find();
    return categorias;
  }

  async obterPorNome(nome: string): Promise<Categoria> {
    const categoria = await this.repository.findOne({ nome });
    return categoria;
  }
}

export { CategoriaRepository };
