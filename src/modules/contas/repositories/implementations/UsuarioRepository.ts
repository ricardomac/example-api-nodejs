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

  async criar({
    nome,
    email,
    carteira_motorista,
    senha,
    avatar,
    id,
  }: ICriarUsuarioDTO): Promise<void> {
    const usuario = this.repository.create({
      nome,
      email,
      carteira_motorista,
      senha,
      avatar,
      id,
    });

    await this.repository.save(usuario);
  }
}

export { UsuarioRepository };
