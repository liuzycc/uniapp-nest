import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Home } from './entities/home.entity';
import { HomeDto } from './dot/home.dot';
@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Home)
    private homeRepository: Repository<Home>,
  ) {}
  // 查询所有
  findAll() {
    return this.homeRepository.find();
  }
  // 创建
  async create(homeInfo: HomeDto) {
    try {
      const res = await this.homeRepository.save(homeInfo);
      return res;
    } catch (e) {
      throw new HttpException(`创建失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 更新
  async update(homeInfo: HomeDto) {
    try {
      const { id, ...arg } = homeInfo;
      const res = await this.homeRepository.update({ id }, { ...arg });
      return res;
    } catch (e) {
      throw new HttpException(`更新失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
}
