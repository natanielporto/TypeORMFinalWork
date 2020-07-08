import { Entity, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('artist')
export default class CommonAttributes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
