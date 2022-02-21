import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsuarioRepository } from "../modules/contas/repositories/implementations/UsuarioRepository";

interface IPayload {
  sub: string;
}

export async function garantirAutenticado(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token ausente!", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: usuario_id } = verify(
      token,
      "f373a97ac8fef465c1174048e6d4b230"
    ) as IPayload;

    const usuarioRepository = new UsuarioRepository();
    const usuario = await usuarioRepository.obterPorId(usuario_id);

    if (!usuario) {
      throw new AppError("Usuário não existe!", 401);
    }

    request.usuario = {
      id: usuario_id,
    };

    next();
  } catch {
    throw new AppError("Token inválido", 401);
  }
}
