import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UsersService } from './users.service';
import { UsersDto } from './dot/users.dot';

interface wxTokenInfo {
  access_token: string;
  expires_in: number;
}
interface wxTokenInfoData {
  data: wxTokenInfo;
}
@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly httpService: HttpService,
  ) {}
  @Get('/list')
  async findAll(@Query() findUserInfo: any) {
    const res = await this.userService.findAll(findUserInfo);
    return res;
  }
  @Post('/create')
  async createUser(@Body() createUser: UsersDto & { code: string }) {
    const { address, name, code } = createUser;
    // if (!code || !address || !name) {
    //   throw new HttpException('缺少必填字段', HttpStatus.BAD_REQUEST);
    // }
    const wxconfig = (await this.userService.getWxconfig()) as any;
    const { grant_type, appid, secret, access_token_time } = wxconfig;
    let { access_token } = wxconfig;
    const date = new Date().getTime();
    // wx-token 没有或超时则重新获取并更新
    if (!access_token || !access_token_time || date - access_token_time > 0) {
      // 获取wx token
      const { data: wxTokenInfo }: wxTokenInfoData = (await this.httpService
        .get(
          `https://api.weixin.qq.com/cgi-bin/stable_token?grant_type=${grant_type}&appid=${appid}&secret=${secret}`,
        )
        .toPromise()) as wxTokenInfoData;
      console.log(wxTokenInfo);
      await this.userService.upDateAccessToken({
        access_token: wxTokenInfo.access_token,
        access_token_time:
          new Date().getTime() + wxTokenInfo.expires_in * 1000 + '',
      });
      access_token = wxTokenInfo.access_token;
    }
    const wxInfo = (await this.httpService
      .get(
        `https://api.weixin.qq.com/sns/jscode2session?js_code=${code}&appid=${appid}&secret=${secret}&grant_type=authorization_code`,
      )
      .toPromise()) as any;
    if (wxInfo.data.openid) {
      let user: any = await this.userService.findOne(wxInfo.data.openid);
      if (!user) {
        const res = await this.userService.create(wxInfo.data.openid);
        res && (user = { openid: wxInfo.data.openid });
      }
      return user?.openid;
    } else {
      throw new HttpException('获取openId失败', HttpStatus.BAD_REQUEST);
    }
  }
  @Post('/update')
  async UpdateUser(@Body() user: UsersDto) {
    const { openid } = user;
    if (!openid) {
      throw new HttpException('缺少必填字段', HttpStatus.BAD_REQUEST);
    }
    const res = await this.userService.update(user);
    return res;
  }
  // 测试异常、成功过滤器
  @Get('/cc')
  async cc() {
    return {
      abc: 'iioo',
    };
    // throw new HttpException('我是异常信息', HttpStatus.BAD_REQUEST);
  }
}
