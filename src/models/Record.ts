import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
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

  @ManyToMany(type => User, record => record.inCommon.id)
  @JoinTable()
  users: User[];

  @ManyToMany(type => Artist, record => record.inCommon.id)
  @JoinTable()
  artists: Artist[];

  @ManyToMany(type => Music, record => record.inCommon.id)
  @JoinTable()
  musics: Music[];

  @ManyToMany(type => Label, record => record.inCommon.id)
  @JoinTable()
  labels: Label[];

  @ManyToMany(type => Band, record => record.inCommon.id)
  @JoinTable()
  bands: Band[];
}
