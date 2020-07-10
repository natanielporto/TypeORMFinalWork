import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { MaxLength, MinLength, IsNotEmpty } from 'class-validator';
// import CommonAttributes from './CommonAttributes';
import Artist from './Artist';
import Band from './Band';

@Entity('record')
export default class Record {
  // @Column(type => CommonAttributes)
  // inCommon: CommonAttributes;
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

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

  @ManyToMany(type => Artist)
  @JoinTable({
    joinColumn: {
      name: 'record',
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
      name: 'record',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'name',
      referencedColumnName: 'id',
    },
  })
  bands: Band[];
}
