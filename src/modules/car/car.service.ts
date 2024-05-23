import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { CarDto } from './dot/car.dot';
@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}
  // 查询所有
  findAll() {
    return this.carRepository.find();
  }
  // 查询用户购物车  未查询到用户则新建
  async findUser(userId: string) {
    try {
      const tempr = await this.carRepository.find({ where: { userId } });
      if (tempr.length === 0) {
        await this.create({ userId, list: JSON.stringify([]) });
      }
      const queryBuilder = this.carRepository.createQueryBuilder('car');
      queryBuilder
        .where('car.userId = :userId', { userId }) // 添加过滤条件
        .leftJoin('users', 'usersTemp', 'car.userId = usersTemp.id') // 第一次左连接，别名为 usersTemp
        .addSelect('usersTemp.address', 'address') // 选择usersTemp的address作为新字段address
        .addSelect('usersTemp.phone', 'phone') // 选择usersTemp的phone作为新字段phone
        .addSelect('usersTemp.name', 'name');
      const result = await queryBuilder.getRawMany();
      const res = result.map((item) => {
        const t: any = {};
        for (let key in item) {
          const v = item[key];
          if (key.includes('car_')) {
            key = key.split('car_')[1];
          }
          t[key] = v;
        }
        return t;
      });
      return res;
    } catch (e) {
      throw new HttpException(`创建失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 创建
  async create(carInfo: CarDto) {
    try {
      const res = await this.carRepository.save(carInfo);
      return res;
    } catch (e) {
      throw new HttpException(`创建失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 更新
  async update(carInfo: CarDto) {
    try {
      const { userId, ...arg } = carInfo;
      const res = await this.carRepository.update({ userId }, { ...arg });
      return res;
    } catch (e) {
      throw new HttpException(`更新失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
}
