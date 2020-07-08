import { Entity, Column, OneToMany, OneToOne } from 'typeorm';
import { MaxLength, MinLength, IsNotEmpty } from 'class-validator';
import CommonAttributes from './CommonAttributes';
import User from './User';
import Record from './Record';
import Label from './Label';
import Band from './Band';
import Artist from './Artist';

@Entity('music')
export default class Music {
  @Column(type => CommonAttributes)
  inCommon: CommonAttributes;

  @Column()
  @MaxLength(100, {
    message: 'Uma música não pode ter mais de 100 caracteres.',
  })
  @MinLength(1, { message: 'Uma música não pode ter menos de 1 caractere.' })
  title: string;

  @Column()
  @IsNotEmpty()
  releaseDate: Date;

  @Column()
  @IsNotEmpty()
  composer: string;

  @Column()
  @IsNotEmpty()
  duration: number;

  @Column()
  like: number;

  @Column()
  love: number;

  @Column({ default: false })
  live: boolean;

  @OneToMany(type => User, music => Music)
  user: User;

  @OneToMany(type => Record, music => Music)
  record: Record;

  @OneToMany(type => Label, music => Music)
  label: Label;

  @OneToOne(type => Band, music => Music)
  band: Band;

  @OneToMany(type => Artist, music => Music)
  artist: Artist;
}
