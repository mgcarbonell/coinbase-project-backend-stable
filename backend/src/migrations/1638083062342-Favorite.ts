import { MigrationInterface, QueryRunner } from "typeorm"

export class Favorite1638083062342 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // write SQL queries to ALTER table in RAW SQL here
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // remember that down REMOVES THINGS FROM THE DB
  }
}
