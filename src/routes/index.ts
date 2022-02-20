import { Router } from "express";

import { autenticacaoRoutes } from "./autenticacao.routes";
import { categoriasRoutes } from "./categorias.routes";
import { especificacoesRoutes } from "./espeficacao.routes";
import { usuariosRoutes } from "./usuarios.routes";

const router = Router();

router.use("/categorias", categoriasRoutes);
router.use("/especificacoes", especificacoesRoutes);
router.use("/usuarios", usuariosRoutes);
router.use(autenticacaoRoutes);

export { router };
