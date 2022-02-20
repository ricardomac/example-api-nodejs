import { container } from "tsyringe";

import { ICategoriaRepository } from "../../modules/carros/repositories/ICategoriaRepository";
import { IEspecificacaoRepository } from "../../modules/carros/repositories/IEspecificacaoRepository";
import { CategoriaRepository } from "../../modules/carros/repositories/implementations/CategoriaRepository";
import { EspecificacaoRepository } from "../../modules/carros/repositories/implementations/EspecificacaoRepository";
import { UsuarioRepository } from "../../modules/contas/repositories/implementations/UsuarioRepository";
import { IUsuarioRepository } from "../../modules/contas/repositories/IUsuarioRepository";

container.registerSingleton<ICategoriaRepository>(
  "CategoriaRepository",
  CategoriaRepository
);

container.registerSingleton<IEspecificacaoRepository>(
  "EspecificacaoRepository",
  EspecificacaoRepository
);

container.registerSingleton<IUsuarioRepository>(
  "UsuarioRepository",
  UsuarioRepository
);
