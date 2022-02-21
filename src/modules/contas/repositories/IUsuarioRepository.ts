import { ICriarUsuarioDTO } from "../dtos/ICriarUsuarioDTO";
import { Usuario } from "../entities/Usuario";

interface IUsuarioRepository {
  obterPorEmail(email: string): Promise<Usuario>;
  obterPorId(id: string): Promise<Usuario>;
  criar(data: ICriarUsuarioDTO): Promise<void>;
}

export { IUsuarioRepository };
