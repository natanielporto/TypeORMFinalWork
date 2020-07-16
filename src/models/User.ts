import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import {
  MaxLength,
  MinLength,
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsAlphanumeric,
} from 'class-validator';
// import CommonAttributes from './CommonAttributes';
import Artist from './Artist';
import Band from './Band';
import Music from './Music';
import Record from './Record';
import Label from './Label';

@Entity('user')
export default class User {
  // @Column(type => CommonAttributes)
  // inCommon: CommonAttributes;

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

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
  nickname: string;

  @Column()
  @IsNotEmpty({ message: 'Por favor, informe a data de nascimento.' })
  birthday: Date;

  @ManyToMany(type => Artist)
  @JoinTable({
    joinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'artist',
      referencedColumnName: 'id',
    },
  })
  artists: Artist[];

  @ManyToMany(type => Band)
  @JoinTable({
    joinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'band',
      referencedColumnName: 'id',
    },
  })
  bands: Band[];

  @ManyToMany(type => Music)
  @JoinTable({
    joinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'music',
      referencedColumnName: 'id',
    },
  })
  musics: Music[];

  @ManyToMany(type => Record)
  @JoinTable({
    joinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'record',
      referencedColumnName: 'id',
    },
  })
  records: Record[];

  @ManyToMany(type => Label)
  @JoinTable({
    joinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'label',
      referencedColumnName: 'id',
    },
  })
  labels: Label[];
}
