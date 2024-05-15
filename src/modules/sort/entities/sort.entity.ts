import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sort')
export class Sort {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  level1: number;

  @Column({ nullable: true })
  level2: number;

  @Column({ nullable: true })
  isDelete: number;
}
