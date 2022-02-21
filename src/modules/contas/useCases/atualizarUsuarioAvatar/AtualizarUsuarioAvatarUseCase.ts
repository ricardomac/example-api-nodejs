import { inject, injectable } from "tsyringe";

import { deletarArquivo } from "../../../../utils/file";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

interface IRequest {
  usuario_id: string;
  avatar_file: string;
}

@injectable()
class AtualizarUsuarioAvatarUseCase {
  constructor(
    @inject("UsuarioRepository")
    private readonly usuarioRepository: IUsuarioRepository
  ) {}

  async execute({ usuario_id, avatar_file }: IRequest): Promise<void> {
    const usuario = await this.usuarioRepository.obterPorId(usuario_id);

    if (usuario.avatar) {
      await deletarArquivo(`./tmp/avatar/${usuario.avatar}`);
    }

    usuario.avatar = avatar_file;

    await this.usuarioRepository.criar(usuario);
  }
}

export { AtualizarUsuarioAvatarUseCase };
