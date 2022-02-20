import { Router } from "express";

import { CriarUsuarioController } from "../modules/contas/useCases/criarUsuario/CriarUsuarioController";

const usuariosRoutes = Router();

const criarUsuarioController = new CriarUsuarioController();

usuariosRoutes.post("/", criarUsuarioController.handle);

export { usuariosRoutes };
