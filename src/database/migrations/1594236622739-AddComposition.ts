import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddComposition1594236622739 implements MigrationInterface {
  name = 'AddComposition1594236622739';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "name"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "birthday"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "passing"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "likes"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "followers"`);
    await queryRunner.query(
      `ALTER TABLE "artist" DROP CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed"`,
    );
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "artist" DROP COLUMN "updatedAt"`);
    await queryRunner.query(
      `ALTER TABLE "band" DROP CONSTRAINT "PK_e808d7dacf72163737ce93d7b23"`,
    );
    await queryRunner.query(`ALTER TABLE "band" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "band" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "band" DROP COLUMN "updatedAt"`);
    await queryRunner.query(
      `ALTER TABLE "music" DROP CONSTRAINT "PK_c92b010dd889692dd54286f75e2"`,
    );
    await queryRunner.query(`ALTER TABLE "music" DROP COLUMN "id"`);
    await queryRunner.query(
      `ALTER TABLE "record" DROP CONSTRAINT "PK_5cb1f4d1aff275cf9001f4343b9"`,
    );
    await queryRunner.query(`ALTER TABLE "record" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "record" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "record" DROP COLUMN "updatedAt"`);
    await queryRunner.query(
      `ALTER TABLE "label" DROP CONSTRAINT "PK_5692ac5348861d3776eb5843672"`,
    );
    await queryRunner.query(`ALTER TABLE "label" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "label" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "label" DROP COLUMN "updatedAt"`);
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
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
    await queryRunner.query(
      `ALTER TABLE "band" ADD "inCommonId" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" ADD CONSTRAINT "PK_e6d868dc2eb3fa0299d4fbd0e8d" PRIMARY KEY ("inCommonId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" ADD "inCommonCreatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" ADD "inCommonUpdatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "music" ADD "inCommonId" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "music" ADD CONSTRAINT "PK_f25670f217aeb2cac08bfbf2121" PRIMARY KEY ("inCommonId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "music" ADD "inCommonCreatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "music" ADD "inCommonUpdatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" ADD "inCommonId" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" ADD CONSTRAINT "PK_8971bb60434b1f1e8aa36f21cd5" PRIMARY KEY ("inCommonId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" ADD "inCommonCreatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" ADD "inCommonUpdatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" ADD "inCommonId" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" ADD CONSTRAINT "PK_c13d439ff044a8eb362be1b8249" PRIMARY KEY ("inCommonId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" ADD "inCommonCreatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" ADD "inCommonUpdatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "inCommonId" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "PK_a902b69d72e9e1881e86ce51c73" PRIMARY KEY ("inCommonId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "inCommonCreatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "inCommonUpdatedat" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "inCommonUpdatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "inCommonCreatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "PK_a902b69d72e9e1881e86ce51c73"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "inCommonId"`);
    await queryRunner.query(
      `ALTER TABLE "label" DROP COLUMN "inCommonUpdatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" DROP COLUMN "inCommonCreatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" DROP CONSTRAINT "PK_c13d439ff044a8eb362be1b8249"`,
    );
    await queryRunner.query(`ALTER TABLE "label" DROP COLUMN "inCommonId"`);
    await queryRunner.query(
      `ALTER TABLE "record" DROP COLUMN "inCommonUpdatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" DROP COLUMN "inCommonCreatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" DROP CONSTRAINT "PK_8971bb60434b1f1e8aa36f21cd5"`,
    );
    await queryRunner.query(`ALTER TABLE "record" DROP COLUMN "inCommonId"`);
    await queryRunner.query(
      `ALTER TABLE "music" DROP COLUMN "inCommonUpdatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "music" DROP COLUMN "inCommonCreatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "music" DROP CONSTRAINT "PK_f25670f217aeb2cac08bfbf2121"`,
    );
    await queryRunner.query(`ALTER TABLE "music" DROP COLUMN "inCommonId"`);
    await queryRunner.query(
      `ALTER TABLE "band" DROP COLUMN "inCommonUpdatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" DROP COLUMN "inCommonCreatedat"`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" DROP CONSTRAINT "PK_e6d868dc2eb3fa0299d4fbd0e8d"`,
    );
    await queryRunner.query(`ALTER TABLE "band" DROP COLUMN "inCommonId"`);
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
      `ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "label" ADD CONSTRAINT "PK_5692ac5348861d3776eb5843672" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "record" ADD CONSTRAINT "PK_5cb1f4d1aff275cf9001f4343b9" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "music" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "music" ADD CONSTRAINT "PK_c92b010dd889692dd54286f75e2" PRIMARY KEY ("id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`,
    );
    await queryRunner.query(
      `ALTER TABLE "band" ADD CONSTRAINT "PK_e808d7dacf72163737ce93d7b23" PRIMARY KEY ("id")`,
    );
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
  }
}
