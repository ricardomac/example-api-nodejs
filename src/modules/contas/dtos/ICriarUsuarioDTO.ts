interface ICriarUsuarioDTO {
  nome: string;
  senha: string;
  email: string;
  carteira_motorista: string;
  id?: string;
  avatar?: string;
}

export { ICriarUsuarioDTO };
