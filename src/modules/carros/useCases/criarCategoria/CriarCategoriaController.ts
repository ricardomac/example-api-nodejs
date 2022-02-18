import { Response, Request } from "express";

import { CriarCategoriaUseCase } from "./CriarCategoriaUseCase";

class CriarCategoriaController {
  constructor(private criarCategoriaUseCase: CriarCategoriaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, descricao } = request.body;

    await this.criarCategoriaUseCase.execute({ nome, descricao });

    return response.status(201).send();
  }
}

export { CriarCategoriaController };
