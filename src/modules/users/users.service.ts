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
  findAll() {
    return this.usersRepository.find();
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
      console.log(res, 'pppp');
      return res;
    } catch (e) {
      console.log(e, '我失败了');

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
