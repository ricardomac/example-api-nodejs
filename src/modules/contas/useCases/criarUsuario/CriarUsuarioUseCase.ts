import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICriarUsuarioDTO } from "../../dtos/ICriarUsuarioDTO";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

@injectable()
class CriarUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}

  async execute({
    nome,
    email,
    senha,
    carteira_motorista,
  }: ICriarUsuarioDTO): Promise<void> {
    const usuarioJaExiste = await this.usuarioRepository.obterPorEmail(email);
    if (usuarioJaExiste) {
      throw new Error("Usuário já existe");
    }

    const senhaHash = await hash(senha, 8);

    await this.usuarioRepository.create({
      nome,
      email,
      senha: senhaHash,
      carteira_motorista,
    });
  }
}

export { CriarUsuarioUseCase };
