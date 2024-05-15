import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';
import { ShopDto } from './dot/shop.dot';
@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>,
  ) {}
  // 查询所有
  findAll() {
    return this.shopRepository.find({ where: { isDelete: 0 } });
  }
  // 创建
  async create(shopInfo: ShopDto) {
    try {
      const res = await this.shopRepository.save(shopInfo);
      return res;
    } catch (e) {
      throw new HttpException(`创建失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 更新
  async update(shopInfo: ShopDto) {
    try {
      const { id, ...arg } = shopInfo;
      const res = await this.shopRepository.update({ id }, { ...arg });
      return res;
    } catch (e) {
      throw new HttpException(`更新失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 删除
  async remove(id: number) {
    try {
      const res = await this.shopRepository.update({ id }, { isDelete: 1 });
      return res;
    } catch (e) {
      throw new HttpException(`更新失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
}
