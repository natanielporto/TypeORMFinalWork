import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddAllTables1594167284586 implements MigrationInterface {
  name = 'AddAllTables1594167284586';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "artist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "passing" TIMESTAMP NOT NULL, "likes" integer NOT NULL, "followers" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "band" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "formation" TIMESTAMP NOT NULL, "disband" TIMESTAMP NOT NULL, "musicians" integer NOT NULL, "likes" integer NOT NULL, "followers" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e808d7dacf72163737ce93d7b23" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "music" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "releaseDate" TIMESTAMP NOT NULL, "composer" character varying NOT NULL, "duration" integer NOT NULL, "like" integer NOT NULL, "love" integer NOT NULL, "live" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c92b010dd889692dd54286f75e2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "record" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "releaseDate" TIMESTAMP NOT NULL, "duration" integer NOT NULL, "tracks" integer NOT NULL, "like" integer NOT NULL, "love" integer NOT NULL, "live" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5cb1f4d1aff275cf9001f4343b9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "label" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "inauguration" TIMESTAMP NOT NULL, "createdBy" character varying NOT NULL, "contact" character varying NOT NULL, "closing" TIMESTAMP NOT NULL, "colunaNova" TIMESTAMP NOT NULL, "likes" integer NOT NULL, "followers" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5692ac5348861d3776eb5843672" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "nickname" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "label"`);
    await queryRunner.query(`DROP TABLE "record"`);
    await queryRunner.query(`DROP TABLE "music"`);
    await queryRunner.query(`DROP TABLE "band"`);
    await queryRunner.query(`DROP TABLE "artist"`);
  }
}
