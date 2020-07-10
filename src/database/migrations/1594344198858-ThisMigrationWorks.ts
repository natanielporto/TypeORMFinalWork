import { MigrationInterface, QueryRunner } from 'typeorm';

export default class ThisMigrationWorks1594344198858
  implements MigrationInterface {
  name = 'ThisMigrationWorks1594344198858';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "artist" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, "passing" TIMESTAMP NOT NULL, "likes" integer NOT NULL, "followers" integer NOT NULL, CONSTRAINT "PK_55b76e71568b5db4d01d3e394ed" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "band" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "formation" TIMESTAMP NOT NULL, "disband" TIMESTAMP NOT NULL, "musicians" integer NOT NULL, "likes" integer NOT NULL, "followers" integer NOT NULL, CONSTRAINT "PK_e808d7dacf72163737ce93d7b23" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "record" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "releaseDate" TIMESTAMP NOT NULL, "duration" integer NOT NULL, "tracks" integer NOT NULL, "like" integer NOT NULL, "love" integer NOT NULL, "live" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_5cb1f4d1aff275cf9001f4343b9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "music" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "releaseDate" TIMESTAMP NOT NULL, "composer" character varying NOT NULL, "duration" integer NOT NULL, "like" integer NOT NULL, "love" integer NOT NULL, "live" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_c92b010dd889692dd54286f75e2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "label" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "inauguration" TIMESTAMP NOT NULL, "createdBy" character varying NOT NULL, "contact" character varying NOT NULL, "closing" TIMESTAMP NOT NULL, "likes" integer NOT NULL, "followers" integer NOT NULL, CONSTRAINT "PK_5692ac5348861d3776eb5843672" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "nickname" character varying NOT NULL, "birthday" TIMESTAMP NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "band_artists_artist" ("band" uuid NOT NULL, "artist" uuid NOT NULL, CONSTRAINT "PK_e7fda3444b507bdd1415c7da439" PRIMARY KEY ("band", "artist"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9bead145312f27acc5d1c69456" ON "band_artists_artist" ("band") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4f29ac3e81ca45b2064079997b" ON "band_artists_artist" ("artist") `,
    );
    await queryRunner.query(
      `CREATE TABLE "record_artists_artist" ("record" uuid NOT NULL, "artist" uuid NOT NULL, CONSTRAINT "PK_836309e3544e88491e478a50878" PRIMARY KEY ("record", "artist"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_45bed9c5eefc56e86b79147aee" ON "record_artists_artist" ("record") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c6d0dbb643c6e0c75443da2b31" ON "record_artists_artist" ("artist") `,
    );
    await queryRunner.query(
      `CREATE TABLE "record_bands_band" ("record" uuid NOT NULL, "name" uuid NOT NULL, CONSTRAINT "PK_509901672cac1247d0b0aaf0ecd" PRIMARY KEY ("record", "name"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_43554f0d9e4b2cddce29cab910" ON "record_bands_band" ("record") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_7856d51e4a705f6dd78691b77b" ON "record_bands_band" ("name") `,
    );
    await queryRunner.query(
      `CREATE TABLE "music_records_record" ("music" uuid NOT NULL, "record" uuid NOT NULL, CONSTRAINT "PK_2c4466339742d927ba2da4c25b4" PRIMARY KEY ("music", "record"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4e0406e3b75ec993dfea772e8f" ON "music_records_record" ("music") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2b4a8b7663b898ccd0e5246bc6" ON "music_records_record" ("record") `,
    );
    await queryRunner.query(
      `CREATE TABLE "music_bands_band" ("music" uuid NOT NULL, "band" uuid NOT NULL, CONSTRAINT "PK_ad11dda70da7039887c8b0995c1" PRIMARY KEY ("music", "band"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4a44ed48fd532b750727dcb48e" ON "music_bands_band" ("music") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_455f1c1db1788d32c1303cab42" ON "music_bands_band" ("band") `,
    );
    await queryRunner.query(
      `CREATE TABLE "music_artists_artist" ("music" uuid NOT NULL, "artist" uuid NOT NULL, CONSTRAINT "PK_c1c3699dbb688523cd9881148a3" PRIMARY KEY ("music", "artist"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_45068716c34d17c97b1ffd86f1" ON "music_artists_artist" ("music") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_91212f9f9cecaf6274f9dd84ce" ON "music_artists_artist" ("artist") `,
    );
    await queryRunner.query(
      `CREATE TABLE "label_records_record" ("label" uuid NOT NULL, "record" uuid NOT NULL, CONSTRAINT "PK_97ee157391bfe82c27cf733b18b" PRIMARY KEY ("label", "record"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a34cbfbf5e73f2c610c3a9b06e" ON "label_records_record" ("label") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_03296214f08c9861650eb15ea5" ON "label_records_record" ("record") `,
    );
    await queryRunner.query(
      `CREATE TABLE "label_musics_music" ("label" uuid NOT NULL, "music" uuid NOT NULL, CONSTRAINT "PK_07131f167f99d9348913a8c5209" PRIMARY KEY ("label", "music"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6a71e3d1aef785c127eafa628a" ON "label_musics_music" ("label") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_99d263be29b2e66de09d2ca244" ON "label_musics_music" ("music") `,
    );
    await queryRunner.query(
      `CREATE TABLE "label_bands_band" ("label" uuid NOT NULL, "band" uuid NOT NULL, CONSTRAINT "PK_b950d54840ee9ff1ea1462f36d1" PRIMARY KEY ("label", "band"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6a0d164960cacc7ba7d3eb9a04" ON "label_bands_band" ("label") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9c4a3b3147c02a648626392818" ON "label_bands_band" ("band") `,
    );
    await queryRunner.query(
      `CREATE TABLE "label_artists_artist" ("label" uuid NOT NULL, "artist" uuid NOT NULL, CONSTRAINT "PK_7f4e0ad6451158131109ffaa483" PRIMARY KEY ("label", "artist"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0daadda85845be5c8c480f84ff" ON "label_artists_artist" ("label") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_284fe504ac698f11ed6ecbdb8b" ON "label_artists_artist" ("artist") `,
    );
    await queryRunner.query(
      `CREATE TABLE "user_artists_artist" ("user" uuid NOT NULL, "artist" uuid NOT NULL, CONSTRAINT "PK_6e69573f3cfb0c777c389e59d64" PRIMARY KEY ("user", "artist"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_66209c83badc1b32a0d19ba797" ON "user_artists_artist" ("user") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3412458ddd6557a7a5a8cd2b54" ON "user_artists_artist" ("artist") `,
    );
    await queryRunner.query(
      `CREATE TABLE "user_bands_band" ("user" uuid NOT NULL, "band" uuid NOT NULL, CONSTRAINT "PK_a7ffb69666cce08697bedb91ec8" PRIMARY KEY ("user", "band"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_61b350867b5f5fa04fccc2847e" ON "user_bands_band" ("user") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e5b5907bb023b9fe97c803ada7" ON "user_bands_band" ("band") `,
    );
    await queryRunner.query(
      `CREATE TABLE "user_musics_music" ("user" uuid NOT NULL, "music" uuid NOT NULL, CONSTRAINT "PK_799c48aca1921f78fe1f2cbc8b0" PRIMARY KEY ("user", "music"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ef92529168ba80889b916f8cf1" ON "user_musics_music" ("user") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_518f29549307a365c9d52be4d1" ON "user_musics_music" ("music") `,
    );
    await queryRunner.query(
      `CREATE TABLE "user_records_record" ("user" uuid NOT NULL, "record" uuid NOT NULL, CONSTRAINT "PK_1fcd8de9e37c67ad89073d62341" PRIMARY KEY ("user", "record"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c9653d6675f81dad1f85a7f5ef" ON "user_records_record" ("user") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_10603eff4cd37e41c5619aeda3" ON "user_records_record" ("record") `,
    );
    await queryRunner.query(
      `CREATE TABLE "user_labels_label" ("user" uuid NOT NULL, "label" uuid NOT NULL, CONSTRAINT "PK_14771f96c279e0070975db66727" PRIMARY KEY ("user", "label"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_29443ca654ce4eb910dd9c1f53" ON "user_labels_label" ("user") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_76b23969312fc4966277cb6a01" ON "user_labels_label" ("label") `,
    );
    await queryRunner.query(
      `ALTER TABLE "band_artists_artist" ADD CONSTRAINT "FK_9bead145312f27acc5d1c69456f" FOREIGN KEY ("band") REFERENCES "band"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "band_artists_artist" ADD CONSTRAINT "FK_4f29ac3e81ca45b2064079997b3" FOREIGN KEY ("artist") REFERENCES "artist"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "record_artists_artist" ADD CONSTRAINT "FK_45bed9c5eefc56e86b79147aee8" FOREIGN KEY ("record") REFERENCES "record"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "record_artists_artist" ADD CONSTRAINT "FK_c6d0dbb643c6e0c75443da2b31e" FOREIGN KEY ("artist") REFERENCES "artist"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "record_bands_band" ADD CONSTRAINT "FK_43554f0d9e4b2cddce29cab9100" FOREIGN KEY ("record") REFERENCES "record"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "record_bands_band" ADD CONSTRAINT "FK_7856d51e4a705f6dd78691b77b5" FOREIGN KEY ("name") REFERENCES "band"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_records_record" ADD CONSTRAINT "FK_4e0406e3b75ec993dfea772e8f1" FOREIGN KEY ("music") REFERENCES "music"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_records_record" ADD CONSTRAINT "FK_2b4a8b7663b898ccd0e5246bc68" FOREIGN KEY ("record") REFERENCES "record"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_bands_band" ADD CONSTRAINT "FK_4a44ed48fd532b750727dcb48ec" FOREIGN KEY ("music") REFERENCES "music"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_bands_band" ADD CONSTRAINT "FK_455f1c1db1788d32c1303cab422" FOREIGN KEY ("band") REFERENCES "band"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_artists_artist" ADD CONSTRAINT "FK_45068716c34d17c97b1ffd86f1a" FOREIGN KEY ("music") REFERENCES "music"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_artists_artist" ADD CONSTRAINT "FK_91212f9f9cecaf6274f9dd84ce0" FOREIGN KEY ("artist") REFERENCES "artist"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_records_record" ADD CONSTRAINT "FK_a34cbfbf5e73f2c610c3a9b06e0" FOREIGN KEY ("label") REFERENCES "label"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_records_record" ADD CONSTRAINT "FK_03296214f08c9861650eb15ea58" FOREIGN KEY ("record") REFERENCES "record"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_musics_music" ADD CONSTRAINT "FK_6a71e3d1aef785c127eafa628ac" FOREIGN KEY ("label") REFERENCES "label"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_musics_music" ADD CONSTRAINT "FK_99d263be29b2e66de09d2ca244b" FOREIGN KEY ("music") REFERENCES "music"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_bands_band" ADD CONSTRAINT "FK_6a0d164960cacc7ba7d3eb9a049" FOREIGN KEY ("label") REFERENCES "label"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_bands_band" ADD CONSTRAINT "FK_9c4a3b3147c02a6486263928189" FOREIGN KEY ("band") REFERENCES "band"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_artists_artist" ADD CONSTRAINT "FK_0daadda85845be5c8c480f84ff1" FOREIGN KEY ("label") REFERENCES "label"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_artists_artist" ADD CONSTRAINT "FK_284fe504ac698f11ed6ecbdb8b4" FOREIGN KEY ("artist") REFERENCES "artist"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_artists_artist" ADD CONSTRAINT "FK_66209c83badc1b32a0d19ba797e" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_artists_artist" ADD CONSTRAINT "FK_3412458ddd6557a7a5a8cd2b544" FOREIGN KEY ("artist") REFERENCES "artist"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_bands_band" ADD CONSTRAINT "FK_61b350867b5f5fa04fccc2847e2" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_bands_band" ADD CONSTRAINT "FK_e5b5907bb023b9fe97c803ada7a" FOREIGN KEY ("band") REFERENCES "band"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_musics_music" ADD CONSTRAINT "FK_ef92529168ba80889b916f8cf11" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_musics_music" ADD CONSTRAINT "FK_518f29549307a365c9d52be4d12" FOREIGN KEY ("music") REFERENCES "music"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_records_record" ADD CONSTRAINT "FK_c9653d6675f81dad1f85a7f5efb" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_records_record" ADD CONSTRAINT "FK_10603eff4cd37e41c5619aeda30" FOREIGN KEY ("record") REFERENCES "record"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_labels_label" ADD CONSTRAINT "FK_29443ca654ce4eb910dd9c1f536" FOREIGN KEY ("user") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_labels_label" ADD CONSTRAINT "FK_76b23969312fc4966277cb6a019" FOREIGN KEY ("label") REFERENCES "label"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_labels_label" DROP CONSTRAINT "FK_76b23969312fc4966277cb6a019"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_labels_label" DROP CONSTRAINT "FK_29443ca654ce4eb910dd9c1f536"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_records_record" DROP CONSTRAINT "FK_10603eff4cd37e41c5619aeda30"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_records_record" DROP CONSTRAINT "FK_c9653d6675f81dad1f85a7f5efb"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_musics_music" DROP CONSTRAINT "FK_518f29549307a365c9d52be4d12"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_musics_music" DROP CONSTRAINT "FK_ef92529168ba80889b916f8cf11"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_bands_band" DROP CONSTRAINT "FK_e5b5907bb023b9fe97c803ada7a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_bands_band" DROP CONSTRAINT "FK_61b350867b5f5fa04fccc2847e2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_artists_artist" DROP CONSTRAINT "FK_3412458ddd6557a7a5a8cd2b544"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_artists_artist" DROP CONSTRAINT "FK_66209c83badc1b32a0d19ba797e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_artists_artist" DROP CONSTRAINT "FK_284fe504ac698f11ed6ecbdb8b4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_artists_artist" DROP CONSTRAINT "FK_0daadda85845be5c8c480f84ff1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_bands_band" DROP CONSTRAINT "FK_9c4a3b3147c02a6486263928189"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_bands_band" DROP CONSTRAINT "FK_6a0d164960cacc7ba7d3eb9a049"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_musics_music" DROP CONSTRAINT "FK_99d263be29b2e66de09d2ca244b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_musics_music" DROP CONSTRAINT "FK_6a71e3d1aef785c127eafa628ac"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_records_record" DROP CONSTRAINT "FK_03296214f08c9861650eb15ea58"`,
    );
    await queryRunner.query(
      `ALTER TABLE "label_records_record" DROP CONSTRAINT "FK_a34cbfbf5e73f2c610c3a9b06e0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_artists_artist" DROP CONSTRAINT "FK_91212f9f9cecaf6274f9dd84ce0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_artists_artist" DROP CONSTRAINT "FK_45068716c34d17c97b1ffd86f1a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_bands_band" DROP CONSTRAINT "FK_455f1c1db1788d32c1303cab422"`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_bands_band" DROP CONSTRAINT "FK_4a44ed48fd532b750727dcb48ec"`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_records_record" DROP CONSTRAINT "FK_2b4a8b7663b898ccd0e5246bc68"`,
    );
    await queryRunner.query(
      `ALTER TABLE "music_records_record" DROP CONSTRAINT "FK_4e0406e3b75ec993dfea772e8f1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "record_bands_band" DROP CONSTRAINT "FK_7856d51e4a705f6dd78691b77b5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "record_bands_band" DROP CONSTRAINT "FK_43554f0d9e4b2cddce29cab9100"`,
    );
    await queryRunner.query(
      `ALTER TABLE "record_artists_artist" DROP CONSTRAINT "FK_c6d0dbb643c6e0c75443da2b31e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "record_artists_artist" DROP CONSTRAINT "FK_45bed9c5eefc56e86b79147aee8"`,
    );
    await queryRunner.query(
      `ALTER TABLE "band_artists_artist" DROP CONSTRAINT "FK_4f29ac3e81ca45b2064079997b3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "band_artists_artist" DROP CONSTRAINT "FK_9bead145312f27acc5d1c69456f"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_76b23969312fc4966277cb6a01"`);
    await queryRunner.query(`DROP INDEX "IDX_29443ca654ce4eb910dd9c1f53"`);
    await queryRunner.query(`DROP TABLE "user_labels_label"`);
    await queryRunner.query(`DROP INDEX "IDX_10603eff4cd37e41c5619aeda3"`);
    await queryRunner.query(`DROP INDEX "IDX_c9653d6675f81dad1f85a7f5ef"`);
    await queryRunner.query(`DROP TABLE "user_records_record"`);
    await queryRunner.query(`DROP INDEX "IDX_518f29549307a365c9d52be4d1"`);
    await queryRunner.query(`DROP INDEX "IDX_ef92529168ba80889b916f8cf1"`);
    await queryRunner.query(`DROP TABLE "user_musics_music"`);
    await queryRunner.query(`DROP INDEX "IDX_e5b5907bb023b9fe97c803ada7"`);
    await queryRunner.query(`DROP INDEX "IDX_61b350867b5f5fa04fccc2847e"`);
    await queryRunner.query(`DROP TABLE "user_bands_band"`);
    await queryRunner.query(`DROP INDEX "IDX_3412458ddd6557a7a5a8cd2b54"`);
    await queryRunner.query(`DROP INDEX "IDX_66209c83badc1b32a0d19ba797"`);
    await queryRunner.query(`DROP TABLE "user_artists_artist"`);
    await queryRunner.query(`DROP INDEX "IDX_284fe504ac698f11ed6ecbdb8b"`);
    await queryRunner.query(`DROP INDEX "IDX_0daadda85845be5c8c480f84ff"`);
    await queryRunner.query(`DROP TABLE "label_artists_artist"`);
    await queryRunner.query(`DROP INDEX "IDX_9c4a3b3147c02a648626392818"`);
    await queryRunner.query(`DROP INDEX "IDX_6a0d164960cacc7ba7d3eb9a04"`);
    await queryRunner.query(`DROP TABLE "label_bands_band"`);
    await queryRunner.query(`DROP INDEX "IDX_99d263be29b2e66de09d2ca244"`);
    await queryRunner.query(`DROP INDEX "IDX_6a71e3d1aef785c127eafa628a"`);
    await queryRunner.query(`DROP TABLE "label_musics_music"`);
    await queryRunner.query(`DROP INDEX "IDX_03296214f08c9861650eb15ea5"`);
    await queryRunner.query(`DROP INDEX "IDX_a34cbfbf5e73f2c610c3a9b06e"`);
    await queryRunner.query(`DROP TABLE "label_records_record"`);
    await queryRunner.query(`DROP INDEX "IDX_91212f9f9cecaf6274f9dd84ce"`);
    await queryRunner.query(`DROP INDEX "IDX_45068716c34d17c97b1ffd86f1"`);
    await queryRunner.query(`DROP TABLE "music_artists_artist"`);
    await queryRunner.query(`DROP INDEX "IDX_455f1c1db1788d32c1303cab42"`);
    await queryRunner.query(`DROP INDEX "IDX_4a44ed48fd532b750727dcb48e"`);
    await queryRunner.query(`DROP TABLE "music_bands_band"`);
    await queryRunner.query(`DROP INDEX "IDX_2b4a8b7663b898ccd0e5246bc6"`);
    await queryRunner.query(`DROP INDEX "IDX_4e0406e3b75ec993dfea772e8f"`);
    await queryRunner.query(`DROP TABLE "music_records_record"`);
    await queryRunner.query(`DROP INDEX "IDX_7856d51e4a705f6dd78691b77b"`);
    await queryRunner.query(`DROP INDEX "IDX_43554f0d9e4b2cddce29cab910"`);
    await queryRunner.query(`DROP TABLE "record_bands_band"`);
    await queryRunner.query(`DROP INDEX "IDX_c6d0dbb643c6e0c75443da2b31"`);
    await queryRunner.query(`DROP INDEX "IDX_45bed9c5eefc56e86b79147aee"`);
    await queryRunner.query(`DROP TABLE "record_artists_artist"`);
    await queryRunner.query(`DROP INDEX "IDX_4f29ac3e81ca45b2064079997b"`);
    await queryRunner.query(`DROP INDEX "IDX_9bead145312f27acc5d1c69456"`);
    await queryRunner.query(`DROP TABLE "band_artists_artist"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "label"`);
    await queryRunner.query(`DROP TABLE "music"`);
    await queryRunner.query(`DROP TABLE "record"`);
    await queryRunner.query(`DROP TABLE "band"`);
    await queryRunner.query(`DROP TABLE "artist"`);
  }
}
