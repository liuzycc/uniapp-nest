import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { WxConfig } from './entities/wxconfig.entity';
import { UsersDto } from './dot/users.dot';
import { wxTokenDto } from './dot/wxconfig.dot';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,

    @InjectRepository(WxConfig)
    private wxConfigRepository: Repository<WxConfig>,
  ) {}
  // 查询所有
  async findAll(findUserInfo: {
    name?: string;
    phone?: string;
    address?: string;
    openId?: string;
  }) {
    try {
      // return this.usersRepository.find();
      const queryBuilder = this.usersRepository.createQueryBuilder('users');
      if (findUserInfo.name) {
        queryBuilder.andWhere('users.name LIKE :name', {
          name: `%${findUserInfo.name}%`,
        });
      }
      if (findUserInfo.phone) {
        queryBuilder.andWhere('users.phone LIKE :phone', {
          phone: `%${findUserInfo.phone}%`,
        });
      }
      if (findUserInfo.address) {
        queryBuilder.andWhere('users.address LIKE :address', {
          address: `%${findUserInfo.address}%`,
        });
      }
      if (findUserInfo.openId) {
        queryBuilder.andWhere('users.openid = :openid', {
          openid: findUserInfo.openId,
        });
      }
      const result = await queryBuilder.getRawMany();
      const res = result.map((item) => {
        const t: any = {};
        for (let key in item) {
          const v = item[key];
          if (key.includes('users_')) {
            key = key.split('users_')[1];
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
  async findOne(openid: string) {
    try {
      const res = await this.usersRepository.findOne({
        where: {
          openid,
        },
      });
      return res;
    } catch (e) {
      throw new HttpException(`查询失败${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 创建新用户
  async create(openid: string) {
    try {
      const res = await this.usersRepository.save({ openid });
      return res;
    } catch (e) {
      throw new HttpException(`创建失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  async update(user: UsersDto) {
    try {
      const { openid, ...arg } = user;
      const res = await this.usersRepository.update({ openid }, arg);
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
  // update
  async upDateAccessToken(wxToken: wxTokenDto) {
    try {
      const { access_token, access_token_time } = wxToken;
      const res = await this.wxConfigRepository.update(
        { id: 1 },
        { access_token, access_token_time },
      );
      return res;
    } catch (e) {
      throw new HttpException(
        `更新小程序access-token失败${e}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
