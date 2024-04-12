import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('demo')
export class Demo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  remake: string;

  @Column()
  value: string;
}
