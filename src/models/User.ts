import { Entity, Column } from 'typeorm';
import {
  MaxLength,
  MinLength,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsAlphanumeric,
} from 'class-validator';
import CommonAttributes from './CommonAttributes';

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
  @IsNotEmpty({ message: 'Por favor, informe sua data de nascimento.' })
  birthday: Date;
}
