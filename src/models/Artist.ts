import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { MaxLength, MinLength, IsDate, IsNumber } from 'class-validator';
import CommonAttributes from './CommonAttributes';
import User from './User';
import Record from './Record';
import Music from './Music';
import Label from './Label';
import Band from './Band';

@Entity('artist')
export default class Artist {
  @Column(type => CommonAttributes)
  inCommon: CommonAttributes;

  @Column()
  @MaxLength(50, {
    message: 'Nome do artista não pode conter mais de 50 caracteres.',
  })
  @MinLength(1, {
    message: 'Nome do artista não pode conter menos de 1 caractere.',
  })
  name: string;

  @Column()
  @IsDate()
  birthday: Date;

  @Column()
  @IsDate()
  passing: Date;

  @Column()
  @IsNumber()
  likes: number;

  @Column()
  @IsNumber()
  followers: number;

  @ManyToMany(type => User, artist => artist.inCommon.id)
  @JoinTable()
  users: User[];

  @ManyToMany(type => Record, artist => artist.inCommon.id)
  @JoinTable()
  records: Record[];

  @ManyToMany(type => Music, artist => artist.inCommon.id)
  @JoinTable()
  musics: Music[];

  @ManyToMany(type => Label, artist => artist.inCommon.id)
  @JoinTable()
  labels: Label[];

  @ManyToMany(type => Band, artist => artist.inCommon.id)
  @JoinTable()
  bands: Band[];
}
