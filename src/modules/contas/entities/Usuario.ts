import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("usuarios")
class Usuario {
  @PrimaryColumn()
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  carteira_motorista: string;

  @Column()
  eAdministrador: boolean;

  @Column()
  avatar: string;

  @CreateDateColumn({
    name: "criado_em",
  })
  criado_em: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Usuario };
