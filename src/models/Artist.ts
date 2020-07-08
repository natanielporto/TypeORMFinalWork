import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
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

  @OneToMany(type => User, artist => Artist)
  user: User;

  @OneToMany(type => Record, artist => Artist)
  record: Record;

  @OneToMany(type => Music, artist => Artist)
  music: Music;

  @OneToMany(type => Label, artist => Artist)
  label: Label;

  @OneToMany(type => Band, artist => Artist)
  band: Band;
}
