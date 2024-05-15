import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('image')
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  originName: string;

  @Column({ nullable: true })
  isDelete: number;
}
