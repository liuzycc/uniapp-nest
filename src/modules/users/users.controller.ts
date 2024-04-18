import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { UsersService } from './users.service';
import { UsersDto } from './dot/users.dot';
@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly httpService: HttpService,
  ) {}
  @Get('/list')
  async findAll() {
    const res = await this.userService.findAll();
    console.log(res[0].name);
    return res;
  }
  @Post('/create')
  async createUser(@Body() createUser: UsersDto & { code: string }) {
    const { address, name, code } = createUser;
    if (!code || !address || !name) {
      throw new HttpException('缺少必填字段', HttpStatus.BAD_REQUEST);
    }
    const wxConfig = await this.userService.getWxconfig();
    console.log(wxConfig, 'pppppp');
    return 'hhhhh';
    // const wxInfo = await this.httpService.post(
    //   'https://api.weixin.qq.com/wxa/getpluginopenpid?access_token=ACCESS_TOKEN',
    //   { code },
    // );
    // const res = await this.userService.create(createUser);
    // return res;
  }
  @Post('/update')
  async UpdateUser(@Body() user: UsersDto) {
    const { openid, address } = user;
    if (!openid || !address) {
      throw new HttpException('缺少必填字段', HttpStatus.BAD_REQUEST);
    }
    const res = await this.userService.update(user);
    return res;
  }
}
