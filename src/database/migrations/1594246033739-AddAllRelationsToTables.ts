import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddAllRelationsToTables1594246033739
  implements MigrationInterface {
  name = 'AddAllRelationsToTables1594246033739';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "artist" DROP CONSTRAINT "FK_3c2c776c0a094c15d6c165494c0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" DROP CONSTRAINT "FK_e5d0325ea0283e5f316dee36a08"`,
    );
    await queryRunner.query(
      `ALTER TABLE "music" DROP CONSTRAINT "FK_eb2faa9b0e0579b8dda67f1ad72"`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" DROP CONSTRAINT "FK_8675cd3761984947c2506f39a25"`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" DROP CONSTRAINT "FK_b4b95fe3503748fcdda151dd719"`,
    );
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "name"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "birthday"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "passing"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "likes"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "followers"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "userId"`);
    await queryRunner.query(
      `ALTER TABLE "artist" DROP CONSTRAINT "PK_10c1796675df147b3769c9bd32c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "inCommonId"`);
    await queryRunner.query(
      `ALTER TABLE "artist" DROP COLUMN "inCommonCreatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" DROP COLUMN "inCommonUpdatedat"`,
    );
    await queryRunner.query(`ALTER TABLE "label" DROP COLUMN "userId"`);
    await queryRunner.query(`ALTER TABLE "music" DROP COLUMN "userId"`);
    await queryRunner.query(`ALTER TABLE "record" DROP COLUMN "userId"`);
    await queryRunner.query(`ALTER TABLE "band" DROP COLUMN "userId"`);
    await queryRunner.query(
      `ALTER TABLE "artist" DROP CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed"`,
    );
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "updatedAt"`);
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "birthday" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "passing" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "likes" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "followers" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "inCommonId" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" DROP CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed"`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD CONSTRAINT "PK_10c1796675df147b3769c9bd32c" PRIMARY KEY ("id", "inCommonId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "inCommonCreatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "inCommonUpdatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "artist" DROP COLUMN "inCommonUpdatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" DROP COLUMN "inCommonCreatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" DROP CONSTRAINT "PK_10c1796675df147b3769c9bd32c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "inCommonId"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "followers"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "likes"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "passing"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "birthday"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "name"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "createdAt"`);
    await queryRunner.query(
      `ALTER TABLE "artist" DROP CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed"`,
    );
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(`ALTER TABLE "band" ADD "userId" uuid`);
    await queryRunner.query(`ALTER TABLE "record" ADD "userId" uuid`);
    await queryRunner.query(`ALTER TABLE "music" ADD "userId" uuid`);
    await queryRunner.query(`ALTER TABLE "label" ADD "userId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "inCommonUpdatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "inCommonCreatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "inCommonId" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" DROP CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed"`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD CONSTRAINT "PK_10c1796675df147b3769c9bd32c" PRIMARY KEY ("id", "inCommonId")`,
    );
    await queryRunner.query(`ALTER TABLE "artist" ADD "userId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "followers" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "likes" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "passing" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "birthday" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD "name" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" ADD CONSTRAINT "FK_b4b95fe3503748fcdda151dd719" FOREIGN KEY ("userId") REFERENCES "user"("inCommonId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" ADD CONSTRAINT "FK_8675cd3761984947c2506f39a25" FOREIGN KEY ("userId") REFERENCES "user"("inCommonId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "music" ADD CONSTRAINT "FK_eb2faa9b0e0579b8dda67f1ad72" FOREIGN KEY ("userId") REFERENCES "user"("inCommonId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" ADD CONSTRAINT "FK_e5d0325ea0283e5f316dee36a08" FOREIGN KEY ("userId") REFERENCES "user"("inCommonId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "artist" ADD CONSTRAINT "FK_3c2c776c0a094c15d6c165494c0" FOREIGN KEY ("userId") REFERENCES "user"("inCommonId") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
