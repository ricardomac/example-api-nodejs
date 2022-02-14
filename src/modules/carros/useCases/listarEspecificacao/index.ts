import { EspecificacaoRepository } from "../../repositories/implementations/EspecificacaoRepository";
import { ListarEspecificacoesController } from "./ListarEspecificacaoController";
import { ListarEspecificacaoUseCase } from "./ListarEspecificacaoUseCase";

const especificacaoRepository = EspecificacaoRepository.getInstance();
const listarEspecificacoesUseCase = new ListarEspecificacaoUseCase(
  especificacaoRepository
);
const listarEspecificacoesController = new ListarEspecificacoesController(
  listarEspecificacoesUseCase
);

export { listarEspecificacoesController };
