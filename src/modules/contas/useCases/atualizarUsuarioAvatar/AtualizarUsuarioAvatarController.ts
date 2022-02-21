import { Request, Response } from "express";
import { container } from "tsyringe";

import { AtualizarUsuarioAvatarUseCase } from "./AtualizarUsuarioAvatarUseCase";

class AtualizarUsuarioAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.usuario;

    const avatar_file = request.file.filename;

    const atualizarUsuarioAvatarUseCase = container.resolve(
      AtualizarUsuarioAvatarUseCase
    );

    atualizarUsuarioAvatarUseCase.execute({ usuario_id: id, avatar_file });

    return response.status(204).send();
  }
}
export { AtualizarUsuarioAvatarController };
