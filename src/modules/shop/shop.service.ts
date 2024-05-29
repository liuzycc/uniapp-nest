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
  async findAll(findInfo: {
    sname?: string;
    sphone?: string;
    saddress?: string;
    status?: 0 | 1 | 2;
  }) {
    // const shopList: any = await this.shopRepository.find({
    //   where: { isDelete: 0 },
    // });
    // return shopList.map((item: any) => {
    //   item.products && (item.products = JSON.parse(item.products));
    //   return item;
    // });

    try {
      const queryBuilder = this.shopRepository.createQueryBuilder('shop');
      queryBuilder.andWhere('shop.isDelete = :isDelete', { isDelete: 0 }); // 添加过滤条件
      if (findInfo.sname) {
        queryBuilder.andWhere('shop.sname LIKE :sname', {
          sname: `%${findInfo.sname}%`,
        });
      }
      if (findInfo.sphone) {
        queryBuilder.andWhere('shop.sphone LIKE :sphone', {
          sphone: `%${findInfo.sphone}%`,
        });
      }
      if (findInfo.saddress) {
        queryBuilder.andWhere('shop.saddress LIKE :saddress', {
          saddress: `%${findInfo.saddress}%`,
        });
      }
      if (
        findInfo.status == 0 ||
        findInfo.status == 1 ||
        findInfo.status == 2
      ) {
        queryBuilder.andWhere('shop.status = :status', {
          status: findInfo.status,
        });
      }
      const result = await queryBuilder.getRawMany();
      const shopList = result.map((item) => {
        const t: any = {};
        for (let key in item) {
          const v = item[key];
          if (key.includes('shop_')) {
            key = key.split('shop_')[1];
          }
          t[key] = v;
        }
        return t;
      });
      return shopList.map((item: any) => {
        item.products && (item.products = JSON.parse(item.products));
        return item;
      });
    } catch (e) {
      throw new HttpException(`查询失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 查询当前用户所有
  findUserAll(info: ShopDto) {
    return this.shopRepository.find({
      where: { userId: info.userId },
    });
  }
  // 查询通过id
  findIdAll(info: ShopDto) {
    return this.shopRepository.find({
      where: { id: info.id },
    });
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
