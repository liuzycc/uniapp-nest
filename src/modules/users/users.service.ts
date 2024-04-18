import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { WxConfig } from './entities/wxconfig.entity';
import { UsersDto } from './dot/users.dot';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,

    @InjectRepository(WxConfig)
    private wxConfigRepository: Repository<WxConfig>,
  ) {}
  // 查询所有
  findAll() {
    return this.usersRepository.find();
  }
  // 创建新用户
  async create(user: UsersDto) {
    try {
      const res = await this.usersRepository.save(user);
      return res;
    } catch (e) {
      throw new HttpException(`创建失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  async update(user: UsersDto) {
    try {
      const { openid, address } = user;
      const res = await this.usersRepository.update({ openid }, { address });
      return res;
    } catch (e) {
      throw new HttpException(`更新失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // wxconfig
  async getWxconfig() {
    try {
      const res = await this.wxConfigRepository.findOne({
        where: {
          id: 1,
        },
      });
      return res;
    } catch (e) {
      throw new HttpException(`获取微信配置失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
}
