import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUsuarioRepository } from "../../repositories/IUsuarioRepository";

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  usuario: {
    nome: string;
    email: string;
  };
  token: string;
}

@injectable()
class AutenticarUsuarioUseCase {
  constructor(
    @inject("UsuarioRepository")
    private usuarioRepository: IUsuarioRepository
  ) {}

  async execute({ email, senha }: IRequest): Promise<IResponse> {
    const usuario = await this.usuarioRepository.obterPorEmail(email);

    if (!usuario) {
      throw new AppError("Email ou senha incorretos!");
    }

    const senhaIguais = await compare(senha, usuario.senha);

    if (!senhaIguais) {
      throw new AppError("Email ou senha incorretos!");
    }

    const token = sign({}, "f373a97ac8fef465c1174048e6d4b230", {
      subject: usuario.id,
      expiresIn: "1d",
    });

    const tokenRetorno: IResponse = {
      token,
      usuario: {
        nome: usuario.nome,
        email: usuario.email,
      },
    };

    return tokenRetorno;
  }
}

export { AutenticarUsuarioUseCase };
