import { Entity, Column } from 'typeorm';
import { MaxLength, MinLength, IsDate, IsNumber } from 'class-validator';
import CommonAttributes from './CommonAttributes';

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
}
