import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import {
  MaxLength,
  MinLength,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsAlphanumeric,
} from 'class-validator';
import CommonAttributes from './CommonAttributes';
import Artist from './Artist';
import Band from './Band';
import Music from './Music';
import Record from './Record';
import Label from './Label';

@Entity('user')
export default class User {
  @Column(type => CommonAttributes)
  inCommon: CommonAttributes;

  @Column()
  @MaxLength(50, { message: 'Seu nome não pode conter mais de 50 caracteres.' })
  @MinLength(2, { message: 'Seu nome não pode conter menos de 2 caracteres.' })
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @MaxLength(16, {
    message:
      'Sua senha não pode ter mais de 16 caracteres, entre letras e números.',
  })
  @MinLength(2, {
    message:
      'Sua senha não pode conter menos de 2 caracteres. entre letras e números',
  })
  @IsAlphanumeric()
  password: string;

  @Column()
  @IsEmpty()
  nickname: string;

  @Column()
  @IsNotEmpty({ message: 'Por favor, informe a data de nascimento.' })
  birthday: Date;

  @ManyToMany(type => Artist, user => user.inCommon.id)
  @JoinTable()
  artists: Artist[];

  @ManyToMany(type => Band, user => user.inCommon.id)
  @JoinTable()
  bands: Band[];

  @ManyToMany(type => Music, user => user.inCommon.id)
  @JoinTable()
  musics: Music[];

  @ManyToMany(type => Record, user => user.inCommon.id)
  @JoinTable()
  records: Record[];

  @ManyToMany(type => Label, user => user.inCommon.id)
  @JoinTable()
  labels: Label[];
}
