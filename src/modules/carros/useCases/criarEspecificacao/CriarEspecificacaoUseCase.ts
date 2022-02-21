import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IEspecificacaoRepository } from "../../repositories/IEspecificacaoRepository";

interface IRequest {
  nome: string;
  descricao: string;
}
@injectable()
class CriarEspecificacaoUseCase {
  constructor(
    @inject("EspecificacaoRepository")
    private especificacaoRepository: IEspecificacaoRepository
  ) {}

  async execute({ nome, descricao }: IRequest): Promise<void> {
    const especificacaoJaExiste =
      await this.especificacaoRepository.obterPorNome(nome);

    if (especificacaoJaExiste) {
      throw new AppError("Especificação já existe!");
    }
    await this.especificacaoRepository.criar({ nome, descricao });
  }
}

export { CriarEspecificacaoUseCase };
