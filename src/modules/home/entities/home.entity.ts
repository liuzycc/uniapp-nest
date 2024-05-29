import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('home')
export class Home {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('longtext', { nullable: true })
  imgs: string;

  @Column('longtext', { nullable: true })
  html: string;
}
