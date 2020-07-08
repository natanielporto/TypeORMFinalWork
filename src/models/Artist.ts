import { Entity, Column } from 'typeorm';
import { MaxLength, MinLength, IsDate, IsNumber } from 'class-validator';
import CommonAttributes from './CommonAttributes';

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
}
