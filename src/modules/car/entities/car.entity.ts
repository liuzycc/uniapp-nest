import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('car')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column('longtext', { nullable: true })
  list: string;
}
