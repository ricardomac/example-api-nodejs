import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { garantirAutenticado } from "../middlewares/garantirAutenticado";
import { AtualizarUsuarioAvatarController } from "../modules/contas/useCases/atualizarUsuarioAvatar/AtualizarUsuarioAvatarController";
import { CriarUsuarioController } from "../modules/contas/useCases/criarUsuario/CriarUsuarioController";

const usuariosRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const criarUsuarioController = new CriarUsuarioController();
const atualizarUsuarioAvatarController = new AtualizarUsuarioAvatarController();

usuariosRoutes.post("/", criarUsuarioController.handle);

usuariosRoutes.patch(
  "/avatar",
  garantirAutenticado,
  uploadAvatar.single("avatar"),
  atualizarUsuarioAvatarController.handle
);

export { usuariosRoutes };
