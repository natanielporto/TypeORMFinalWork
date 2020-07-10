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
import Artist from './Artist';

@Entity('band')
export default class Band {
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

  @ManyToMany(type => Artist)
  @JoinTable({
    joinColumn: {
      name: 'band',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'artist',
      referencedColumnName: 'id',
    },
  })
  artists: Artist[];
}
