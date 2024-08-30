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
  psort: number;

  @Column({ nullable: true })
  count: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ nullable: true })
  tip: string;

  @Column({ nullable: true })
  sellNum: number;

  // 首页轮播
  @Column({ nullable: true })
  isHomeSwiper: number;

  @Column({ nullable: true })
  homeSwiperNum: number;

  // 今日特价
  @Column({ nullable: true })
  isHomeCheap: number;

  @Column({ nullable: true })
  homeCheapNum: number;

  // 新品专区
  @Column({ nullable: true })
  isHomeNewProduct: number;

  @Column({ nullable: true })
  homeNewProductNum: number;

  @Column({ nullable: true })
  isDelete: number;
}
