import { Request, Response } from "express";
import { container } from "tsyringe";

import { AutenticarUsuarioUseCase } from "./AutenticarUsuarioUseCase";

class AutenticarUsuarioController {
  async handle(request: Request, response: Response) {
    const { senha, email } = request.body;

    const autenticarUsuarioUseCase = container.resolve(
      AutenticarUsuarioUseCase
    );

    const autenticacao = await autenticarUsuarioUseCase.execute({
      email,
      senha,
    });

    return response.json(autenticacao);
  }
}

export { AutenticarUsuarioController };
