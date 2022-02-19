import { container } from "tsyringe";

import { ICategoriaRepository } from "../../modules/carros/repositories/ICategoriaRepository";
import { IEspecificacaoRepository } from "../../modules/carros/repositories/IEspecificacaoRepository";
import { CategoriaRepository } from "../../modules/carros/repositories/implementations/CategoriaRepository";
import { EspecificacaoRepository } from "../../modules/carros/repositories/implementations/EspecificacaoRepository";

container.registerSingleton<ICategoriaRepository>(
  "CategoriaRepository",
  CategoriaRepository
);

container.registerSingleton<IEspecificacaoRepository>(
  "EspecificacaoRepository",
  EspecificacaoRepository
);
