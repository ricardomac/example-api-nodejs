import { Request, Response } from "express";

import { ListarCategoriasUseCase } from "./ListarCategoriasUseCase";

class ListarCategoriasController {
  constructor(private listarCategoriaUseCase: ListarCategoriasUseCase) {}

  handle(request: Request, response: Response): Response {
    const categorias = this.listarCategoriaUseCase.execute();

    return response.json(categorias);
  }
}
export { ListarCategoriasController };
