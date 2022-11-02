import { MigrationInterface, QueryRunner } from "typeorm";

//Auto generate migrations with TypeORM 
export class default1667398882147 implements MigrationInterface {
    name = 'default1667398882147'

    // Querys to create and alter all tables in a exist database with TypeORM
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "username" text NOT NULL, "email" text NOT NULL, "senha" text NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "UQ_51b8b26ac168fbe7d6f5653e6cf" UNIQUE ("name"), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL DEFAULT '1', "amount" integer NOT NULL, "document" text NOT NULL, "userId" uuid, "productId" uuid, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text NOT NULL, "desc" text NOT NULL, "img" text NOT NULL, "categories" text array NOT NULL, "price" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "UQ_6de48d5204492ea006091b57651" UNIQUE ("img"), CONSTRAINT "PK_36a07cc432789830e7fb7b58a83" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL DEFAULT '1', "userId" uuid, "productId" uuid, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_8624dad595ae567818ad9983b33" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_371eb56ecc4104c2644711fa85f" FOREIGN KEY ("productId") REFERENCES "Products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    // All querys to drop all table in database with TypeORM
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_371eb56ecc4104c2644711fa85f"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_8624dad595ae567818ad9983b33"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TABLE "Products"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
