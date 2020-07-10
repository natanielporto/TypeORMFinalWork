import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { MaxLength, MinLength, IsDate, IsNumber } from 'class-validator';
// import CommonAttributes from './CommonAttributes';
import Record from './Record';
import Music from './Music';
import Band from './Band';
import Artist from './Artist';

@Entity('label')
export default class Label {
  // @Column(type => CommonAttributes)
  // inCommon: CommonAttributes;
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

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

  @ManyToMany(type => Record)
  @JoinTable({
    joinColumn: {
      name: 'label',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'record',
      referencedColumnName: 'id',
    },
  })
  records: Record[];

  @ManyToMany(type => Music)
  @JoinTable({
    joinColumn: {
      name: 'label',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'music',
      referencedColumnName: 'id',
    },
  })
  musics: Music[];

  @ManyToMany(type => Band)
  @JoinTable({
    joinColumn: {
      name: 'label',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'band',
      referencedColumnName: 'id',
    },
  })
  bands: Band[];

  @ManyToMany(type => Artist)
  @JoinTable({
    joinColumn: {
      name: 'label',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'artist',
      referencedColumnName: 'id',
    },
  })
  artists: Artist[];
}
