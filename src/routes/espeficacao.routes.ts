import { Router } from "express";

import { garantirAutenticado } from "../middlewares/garantirAutenticado";
import { CriarEspecificacaoController } from "../modules/carros/useCases/criarEspecificacao/CriarEspecificacaoController";
import { ListarEspecificacoesController } from "../modules/carros/useCases/listarEspecificacao/ListarEspecificacaoController";

const especificacoesRoutes = Router();

const criarEspecificacaoController = new CriarEspecificacaoController();
const listarEspecificacoesController = new ListarEspecificacoesController();

especificacoesRoutes.use(garantirAutenticado);
especificacoesRoutes.post("/", criarEspecificacaoController.handle);
especificacoesRoutes.get("/", listarEspecificacoesController.handle);

export { especificacoesRoutes };
