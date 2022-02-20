import { Request, Response } from "express";
import { container } from "tsyringe";

import { CriarUsuarioUseCase } from "./CriarUsuarioUseCase";

class CriarUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, email, senha, carteira_motorista } = request.body;

    const criarUsuarioUseCase = container.resolve(CriarUsuarioUseCase);

    await criarUsuarioUseCase.execute({
      nome,
      email,
      senha,
      carteira_motorista,
    });

    return response.status(201).send();
  }
}

export { CriarUsuarioController };
