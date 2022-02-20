import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterarUsuariosDeletarNomeUsuario1645369346297
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("usuarios", "nome_usuario");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "usuarios",
      new TableColumn({
        name: "nome_usuario",
        type: "varchar",
      })
    );
  }
}
