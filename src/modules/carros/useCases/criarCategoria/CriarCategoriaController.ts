import { Response, Request } from "express";
import { container } from "tsyringe";

import { CriarCategoriaUseCase } from "./CriarCategoriaUseCase";

class CriarCategoriaController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, descricao } = request.body;

    const criarCategoriaUseCase = container.resolve(CriarCategoriaUseCase);

    await criarCategoriaUseCase.execute({ nome, descricao });

    return response.status(201).send();
  }
}

export { CriarCategoriaController };
