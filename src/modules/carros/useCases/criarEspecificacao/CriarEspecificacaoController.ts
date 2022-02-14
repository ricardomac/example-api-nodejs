import { Request, Response } from "express";

import { CriarEspecificacaoUseCase } from "./CriarEspecificacaoUseCase";

class CriarEspecificacaoController {
  constructor(private criarEspecificacaoUseCase: CriarEspecificacaoUseCase) {}

  handle(request: Request, response: Response): Response {
    const { nome, descricao } = request.body;

    this.criarEspecificacaoUseCase.execute({ nome, descricao });

    return response.status(201).send();
  }
}

export { CriarEspecificacaoController };
