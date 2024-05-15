import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  showTitle: string;

  @Column({ nullable: true })
  subTitle: string;

  @Column({ nullable: true })
  tags: string;

  @Column({ nullable: true })
  thum: string;

  @Column({ nullable: true })
  imgs: string;

  @Column('longtext', { nullable: true })
  info: string;

  @Column('longtext', { nullable: true })
  config: string;

  @Column({ nullable: true })
  sort1: number;

  @Column({ nullable: true })
  sort2: number;

  @Column({ nullable: true })
  count: number;

  @Column({ nullable: true })
  sellNum: number;

  @Column({ nullable: true })
  isDelete: number;
}
