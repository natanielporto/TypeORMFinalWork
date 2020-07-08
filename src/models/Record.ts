import { Entity, Column, OneToMany } from 'typeorm';
import { MaxLength, MinLength, IsNotEmpty } from 'class-validator';
import CommonAttributes from './CommonAttributes';
import User from './User';
import Artist from './Artist';
import Music from './Music';
import Label from './Label';
import Band from './Band';

@Entity('record')
export default class Record {
  @Column(type => CommonAttributes)
  inCommon: CommonAttributes;

  @Column()
  @MaxLength(100, {
    message: 'O nome de um álbum não pode ter mais de 100 caracteres.',
  })
  @MinLength(1, {
    message: 'O nome de um álbum não pode ter menos de 1 caractere.',
  })
  title: string;

  @Column()
  @IsNotEmpty()
  releaseDate: Date;

  @Column()
  @IsNotEmpty()
  duration: number;

  @Column()
  @IsNotEmpty()
  @MinLength(1, { message: 'O álbum não pode ter menos de 1 música.' })
  tracks: number;

  @Column()
  like: number;

  @Column()
  love: number;

  @Column({ default: false })
  live: boolean;

  @OneToMany(type => User, record => Record)
  user: User;

  @OneToMany(type => Artist, record => Record)
  artist: Artist;

  @OneToMany(type => Music, record => Record)
  music: Music;

  @OneToMany(type => Label, record => Record)
  label: Label;

  @OneToMany(type => Band, record => Record)
  band: Band;
}
