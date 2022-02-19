import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListarEspecificacaoUseCase } from "./ListarEspecificacaoUseCase";

class ListarEspecificacoesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listarEspecificacaoUseCase = container.resolve(
      ListarEspecificacaoUseCase
    );
    const especificacoes = await listarEspecificacaoUseCase.execute();

    return response.json(especificacoes);
  }
}
export { ListarEspecificacoesController };
