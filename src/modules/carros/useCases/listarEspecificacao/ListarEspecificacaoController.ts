import { Request, Response } from "express";

import { ListarEspecificacaoUseCase } from "./ListarEspecificacaoUseCase";

class ListarEspecificacoesController {
  constructor(private listarEspecificacaoUseCase: ListarEspecificacaoUseCase) {}

  handle(request: Request, response: Response): Response {
    const especificacoes = this.listarEspecificacaoUseCase.execute();

    return response.json(especificacoes);
  }
}
export { ListarEspecificacoesController };
