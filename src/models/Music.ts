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
import Record from './Record';
import Band from './Band';
import Artist from './Artist';

@Entity('music')
export default class Music {
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

  @ManyToMany(type => Record)
  @JoinTable({
    joinColumn: {
      name: 'music',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'record',
      referencedColumnName: 'id',
    },
  })
  records: Record[];

  @ManyToMany(type => Band)
  @JoinTable({
    joinColumn: {
      name: 'music',
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
      name: 'music',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'artist',
      referencedColumnName: 'id',
    },
  })
  artists: Artist[];
}
