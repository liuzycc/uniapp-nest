import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('shop')
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column('longtext', { nullable: true })
  products: string;

  @Column({ nullable: true })
  remark: string;

  @Column({ nullable: true })
  status: number;

  @Column({ nullable: true })
  date: string;

  @Column({ nullable: true })
  isDelete: number;

  @Column({ nullable: true })
  sname: string;

  @Column({ nullable: true })
  sphone: string;

  @Column('longtext', { nullable: true })
  saddress: string;
}
