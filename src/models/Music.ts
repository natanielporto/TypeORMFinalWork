import { Entity, Column } from 'typeorm';
import { MaxLength, MinLength, IsNotEmpty } from 'class-validator';
import CommonAttributes from './CommonAttributes';

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
}
