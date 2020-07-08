import { Entity, Column, OneToMany } from 'typeorm';
import { MaxLength, MinLength, IsDate, IsNumber } from 'class-validator';
import CommonAttributes from './CommonAttributes';
import User from './User';
import Record from './Record';
import Music from './Music';
import Label from './Label';
import Artist from './Artist';

@Entity('band')
export default class Band {
  @Column(type => CommonAttributes)
  inCommon: CommonAttributes;

  @Column()
  @MaxLength(50, {
    message: 'Nome da banda não pode conter mais de 50 caracteres.',
  })
  @MinLength(1, {
    message: 'Nome da banda não pode conter menos de 1 caractere.',
  })
  name: string;

  @Column()
  @IsDate()
  formation: Date;

  @Column()
  @IsDate()
  disband: Date;

  @Column()
  @IsNumber()
  musicians: number;

  @Column()
  @IsNumber()
  likes: number;

  @Column()
  @IsNumber()
  followers: number;

  @OneToMany(type => User, band => Band)
  user: User;

  @OneToMany(type => Record, band => Band)
  record: Record;

  @OneToMany(type => Music, band => Band)
  music: Music;

  @OneToMany(type => Label, band => Band)
  band: Band;

  @OneToMany(type => Artist, band => Band)
  artist: Artist;
}
