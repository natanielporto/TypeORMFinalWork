import {MigrationInterface, QueryRunner} from "typeorm";

export class AddAllRelationsToTablesNewTryAgain1594248752198 implements MigrationInterface {
    name = 'AddAllRelationsToTablesNewTryAgain1594248752198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "passing"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "likes"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "followers"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP CONSTRAINT "PK_10c1796675df147b3769c9bd32c"`);
        await queryRunner.query(`ALTER TABLE "artist" ADD CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "inCommonId"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "inCommonCreatedat"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "inCommonUpdatedat"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "artist" ADD CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "birthday" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "passing" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "likes" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "followers" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "inCommonId" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "artist" DROP CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed"`);
        await queryRunner.query(`ALTER TABLE "artist" ADD CONSTRAINT "PK_10c1796675df147b3769c9bd32c" PRIMARY KEY ("id", "inCommonId")`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "inCommonCreatedat" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "inCommonUpdatedat" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "inCommonUpdatedat"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "inCommonCreatedat"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP CONSTRAINT "PK_10c1796675df147b3769c9bd32c"`);
        await queryRunner.query(`ALTER TABLE "artist" ADD CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "inCommonId"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "followers"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "likes"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "passing"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "birthday"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed"`);
        await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "artist" ADD CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "inCommonUpdatedat" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "inCommonCreatedat" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "inCommonId" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "artist" DROP CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed"`);
        await queryRunner.query(`ALTER TABLE "artist" ADD CONSTRAINT "PK_10c1796675df147b3769c9bd32c" PRIMARY KEY ("id", "inCommonId")`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "followers" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "likes" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "passing" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "birthday" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "artist" ADD "name" character varying NOT NULL`);
    }

}
