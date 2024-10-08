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
  async findAll(findInfo: {
    id?: string;
    title?: string;
    sort1?: string;
    sort2?: string;
    isHomeSwiper?: string;
    isHomeCheap?: string;
    isHomeNewProduct?: string;
  }) {
    console.log(findInfo);
    // return this.productRepository.find({ where: { isDelete: 0 } });
    try {
      const queryBuilder = this.productRepository.createQueryBuilder('product');

      queryBuilder
        .leftJoin('sort', 'level1Sort', 'product.sort1 = level1Sort.id') // 第一次左连接，别名为level1Sort
        .addSelect('level1Sort.title', 'sort1Name') // 选择level1Sort的title作为新字段level1Name
        .leftJoin('sort', 'level2Sort', 'product.sort2 = level2Sort.id') // 第二次左连接，别名为level2Sort
        .addSelect('level2Sort.title', 'sort2Name') // 选择level2Sort的title作为新字段level2Name
        .addSelect('level2Sort.sort', 'sort2sort') // 选择level2Sort的title作为新字段level2Name
        .andWhere('product.isDelete = :isDelete', { isDelete: 0 }); // 添加过滤条件
      // 这里增加查询条件
      if (findInfo.id) {
        queryBuilder.andWhere('product.id = :id', {
          id: findInfo.id,
        });
      }
      if (findInfo.title) {
        queryBuilder.andWhere('product.title LIKE :title', {
          title: `%${findInfo.title}%`,
        });
      }
      if (findInfo.sort1) {
        queryBuilder.andWhere('product.sort1 = :sort1', {
          sort1: findInfo.sort1,
        });
      }
      if (findInfo.sort2) {
        queryBuilder.andWhere('product.sort2 = :sort2', {
          sort2: findInfo.sort2,
        });
      }
      // 首页轮播
      if (findInfo.isHomeSwiper) {
        queryBuilder.andWhere('product.isHomeSwiper = :isHomeSwiper', {
          isHomeSwiper: findInfo.isHomeSwiper,
        });
      }
      // 现货特价
      if (findInfo.isHomeCheap) {
        queryBuilder.andWhere('product.isHomeCheap = :isHomeCheap', {
          isHomeCheap: findInfo.isHomeCheap,
        });
      }
      // 新品专区
      if (findInfo.isHomeNewProduct) {
        queryBuilder.andWhere('product.isHomeNewProduct = :isHomeNewProduct', {
          isHomeNewProduct: findInfo.isHomeNewProduct,
        });
      }
      const result = await queryBuilder.getRawMany();
      const res = result.map((item) => {
        const t: any = {};
        for (let key in item) {
          const v = item[key];
          if (key.includes('product_')) {
            key = key.split('product_')[1];
          }
          t[key] = v;
        }
        return t;
      });
      return res;
    } catch (e) {
      throw new HttpException(`查询失败：${e}`, HttpStatus.BAD_REQUEST);
    }
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
