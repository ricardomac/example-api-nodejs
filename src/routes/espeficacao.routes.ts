import { Router } from "express";

import { criarEspecificacaoController } from "../modules/carros/useCases/criarEspecificacao";
import { listarEspecificacoesController } from "../modules/carros/useCases/listarEspecificacao";

const especificacoesRoutes = Router();

especificacoesRoutes.post("/", (request, response) => {
  return criarEspecificacaoController.handle(request, response);
});

especificacoesRoutes.get("/", (request, response) => {
  return listarEspecificacoesController.handle(request, response);
});

export { especificacoesRoutes };
