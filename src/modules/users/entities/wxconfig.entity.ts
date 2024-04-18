import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wxconfig')
export class WxConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  grant_type: string;

  @Column()
  appid: string;

  @Column()
  secret: string;
}
