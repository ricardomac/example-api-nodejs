import { Router } from "express";

import { AutenticarUsuarioController } from "../modules/contas/useCases/autenticacaoUsuario/AutenticarUsuarioController";

const autenticacaoRoutes = Router();

const autenticarUsuarioController = new AutenticarUsuarioController();

autenticacaoRoutes.post("/autenticar", autenticarUsuarioController.handle);

export { autenticacaoRoutes };
