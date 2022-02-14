import { v4 as uuidV4 } from "uuid";

class Especificacao {
  id?: string;
  nome: string;
  descricao: string;
  criado_em: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Especificacao };
