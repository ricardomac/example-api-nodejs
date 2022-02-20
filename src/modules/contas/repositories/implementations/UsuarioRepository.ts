import { getRepository, Repository } from "typeorm";

import { ICriarUsuarioDTO } from "../../dtos/ICriarUsuarioDTO";
import { Usuario } from "../../entities/Usuario";
import { IUsuarioRepository } from "../IUsuarioRepository";

class UsuarioRepository implements IUsuarioRepository {
  private repository: Repository<Usuario>;

  constructor() {
    this.repository = getRepository(Usuario);
  }

  async obterPorId(id: string): Promise<Usuario> {
    const usuario = await this.repository.findOne(id);
    return usuario;
  }
  async obterPorEmail(email: string): Promise<Usuario> {
    const usuario = await this.repository.findOne({ email });
    return usuario;
  }

  async create({
    nome,
    email,
    carteira_motorista,
    senha,
  }: ICriarUsuarioDTO): Promise<void> {
    const usuario = this.repository.create({
      nome,
      email,
      carteira_motorista,
      senha,
    });

    await this.repository.save(usuario);
  }
}

export { UsuarioRepository };
