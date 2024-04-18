import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  openid: string;

  @Column({ nullable: true })
  unionid: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  remake: string;

  @Column()
  address: string;
}
