import { Entity, Column } from 'typeorm';
import { MaxLength, MinLength, IsNotEmpty } from 'class-validator';
import CommonAttributes from './CommonAttributes';

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
}
