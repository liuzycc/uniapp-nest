import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductDto } from './dot/product.dot';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
  // 查询所有
  findAll() {
    return this.productRepository.find();
  }
  // 创建
  async create(productInfo: ProductDto) {
    try {
      const res = await this.productRepository.save(productInfo);
      return res;
    } catch (e) {
      throw new HttpException(`创建失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 更新
  async update(productInfo: ProductDto) {
    try {
      const { id, ...arg } = productInfo;
      const res = await this.productRepository.update({ id }, { ...arg });
      return res;
    } catch (e) {
      throw new HttpException(`更新失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 删除
  async remove(id: number) {
    try {
      const res = await this.productRepository.update({ id }, { isDelete: 1 });
      return res;
    } catch (e) {
      throw new HttpException(`更新失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
}
