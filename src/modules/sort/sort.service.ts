import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sort } from './entities/sort.entity';
import { SortDto } from './dot/sort.dot';
@Injectable()
export class SortService {
  constructor(
    @InjectRepository(Sort)
    private sortRepository: Repository<Sort>,
  ) {}
  // 查询所有
  findAll() {
    return this.sortRepository.find({ where: { isDelete: 0 } });
  }
  // 创建
  async create(sortInfo: SortDto) {
    try {
      const res = await this.sortRepository.save(sortInfo);
      return res;
    } catch (e) {
      throw new HttpException(`创建失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 更新
  async update(sortInfo: SortDto) {
    try {
      const { id, ...arg } = sortInfo;
      const res = await this.sortRepository.update({ id }, { ...arg });
      return res;
    } catch (e) {
      throw new HttpException(`更新失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 删除
  async remove(id: number) {
    try {
      const res = await this.sortRepository.update({ id }, { isDelete: 1 });
      return res;
    } catch (e) {
      throw new HttpException(`更新失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
}
