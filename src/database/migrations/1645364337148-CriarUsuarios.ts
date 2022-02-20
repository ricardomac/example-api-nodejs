import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarUsuarios1645364337148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "usuarios",
        columns: [
          {
            name: "id",
            type: "uuid",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "nome_usuario",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "senha",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "carteira_motorista",
            type: "varchar",
          },
          {
            name: "eAdministrador",
            type: "boolean",
            default: false,
          },
          {
            name: "criado_em",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("usuarios");
  }
}
