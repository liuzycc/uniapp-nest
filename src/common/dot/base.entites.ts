import {
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
export class BaseDTO {
  // 主键id
  @PrimaryGeneratedColumn()
  id: number;

  // 创建时间
  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  // 更新时间
  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;
}
