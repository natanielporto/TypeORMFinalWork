import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { MaxLength, MinLength, IsDate, IsNumber } from 'class-validator';
import CommonAttributes from './CommonAttributes';
import User from './User';
import Record from './Record';
import Music from './Music';
import Band from './Band';
import Artist from './Artist';

@Entity('label')
export default class Label {
  @Column(type => CommonAttributes)
  inCommon: CommonAttributes;

  @Column()
  @MaxLength(50, {
    message: 'Nome da gravadora não pode conter mais de 50 caracteres.',
  })
  @MinLength(1, {
    message: 'Nome da gravadora não pode conter menos de 1 caractere.',
  })
  name: string;

  @Column()
  @IsDate()
  inauguration: Date;

  @Column()
  @MaxLength(50, {
    message:
      'Nome da pessoa que criou a gravadora não pode conter mais de 50 caracteres.',
  })
  @MinLength(1, {
    message:
      'Nome da pessoa que criou a gravadora não pode conter mais de 50 caracteres.',
  })
  createdBy: string;

  @Column()
  @MaxLength(50, {
    message:
      'Nome da pessoa que criou a gravadora não pode conter mais de 50 caracteres.',
  })
  @MinLength(1, {
    message:
      'Nome da pessoa que criou a gravadora não pode conter mais de 50 caracteres.',
  })
  contact: string;

  @Column()
  @IsDate()
  closing: Date;

  @Column()
  @IsNumber()
  likes: number;

  @Column()
  @IsNumber()
  followers: number;

  @ManyToMany(type => User, label => label.inCommon.id)
  @JoinTable()
  users: User[];

  @ManyToMany(type => Record, label => label.inCommon.id)
  @JoinTable()
  records: Record[];

  @ManyToMany(type => Music, label => label.inCommon.id)
  @JoinTable()
  musics: Music[];

  @ManyToMany(type => Band, label => label.inCommon.id)
  @JoinTable()
  bands: Band[];

  @ManyToMany(type => Artist, label => label.inCommon.id)
  @JoinTable()
  artists: Artist[];
}
