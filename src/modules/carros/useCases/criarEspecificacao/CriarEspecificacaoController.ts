import { Request, Response } from "express";
import { container } from "tsyringe";

import { CriarEspecificacaoUseCase } from "./CriarEspecificacaoUseCase";

class CriarEspecificacaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, descricao } = request.body;

    const criarEspecificacaoUseCase = container.resolve(
      CriarEspecificacaoUseCase
    );

    await criarEspecificacaoUseCase.execute({ nome, descricao });

    return response.status(201).send();
  }
}

export { CriarEspecificacaoController };
