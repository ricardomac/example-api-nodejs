import { Response, Request } from "express";

import { CriarCategoriaUseCase } from "./CriarCategoriaUseCase";

class CriarCategoriaController {
  constructor(private criarCategoriaUseCase: CriarCategoriaUseCase) {}

  handle(request: Request, response: Response): Response {
    const { nome, descricao } = request.body;

    this.criarCategoriaUseCase.execute({ nome, descricao });

    return response.status(201).send();
  }
}

export { CriarCategoriaController };
