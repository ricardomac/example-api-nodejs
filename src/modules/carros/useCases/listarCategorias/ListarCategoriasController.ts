import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListarCategoriasUseCase } from "./ListarCategoriasUseCase";

class ListarCategoriasController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listarCategoriaUseCase = container.resolve(ListarCategoriasUseCase);

    const categorias = await listarCategoriaUseCase.execute();

    return response.json(categorias);
  }
}
export { ListarCategoriasController };
