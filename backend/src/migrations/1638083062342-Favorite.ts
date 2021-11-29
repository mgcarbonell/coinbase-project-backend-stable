import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Favorite1638083062342 implements MigrationInterface {
  private table = new Table({
    name: "favorite",
    columns: [
      {
        name: "id",
        type: "integer",
        isPrimary: true,
        isGenerated: true,
        isNullable: false,
        generationStrategy: "increment",
      },
      {
        name: "cryptoName",
        type: "varchar",
        length: "255",
        isUnique: true,
        isNullable: false,
      },
      {
        name: "note",
        type: "text",
        length: "1000",
        isNullable: true,
      },
      {
        name: "created_at",
        type: "timestamptz",
        isNullable: false,
        default: "now()",
      },
      {
        name: "updated_at",
        type: "timestamptz",
        isNullable: false,
        default: "now()",
      },
    ],
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    // write SQL queries to ALTER table in RAW SQL here
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // reverts what was down in "up" method
  }
}
