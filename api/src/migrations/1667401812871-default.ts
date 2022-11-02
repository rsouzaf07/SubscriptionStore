import { MigrationInterface, QueryRunner } from "typeorm";

export class default1667401812871 implements MigrationInterface {
    name = 'default1667401812871'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "senha" TO "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "password" TO "senha"`);
    }

}
