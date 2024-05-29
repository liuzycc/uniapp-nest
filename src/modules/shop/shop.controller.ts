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
import { ShopService } from './shop.service';
import { ShopDto } from './dot/shop.dot';
@Controller('shop')
export class ShopController {
  constructor(
    private readonly shopService: ShopService,
    private readonly httpService: HttpService,
  ) {}
  @Get('/list')
  async findAll(@Query() query: any) {
    const res = await this.shopService.findAll(query);
    return res;
  }
  @Get('/findIdInfo')
  async findIdInfo(@Query() info: any) {
    const { id } = info;
    if (!id) {
      throw new HttpException('缺少必填字段id', HttpStatus.BAD_REQUEST);
    }
    const res = await this.shopService.findIdAll(info);
    return res;
  }
  @Get('/findUserList')
  async findUserListAll(@Query() info: any) {
    const { userId } = info;
    if (!userId) {
      throw new HttpException('缺少必填字段userId', HttpStatus.BAD_REQUEST);
    }
    const res = await this.shopService.findUserAll(info);
    return res;
  }
  @Post('/create')
  async createShop(@Body() createShop: ShopDto) {
    const { userId } = createShop;
    if (!userId) {
      throw new HttpException('缺少必填字段userId', HttpStatus.BAD_REQUEST);
    }
    const res = await this.shopService.create(createShop);
    return res;
  }
  @Post('/update')
  async updateShop(@Body() updateShop: ShopDto) {
    const { id } = updateShop;
    if (!id) {
      throw new HttpException('缺少必填字段id', HttpStatus.BAD_REQUEST);
    }
    const res = await this.shopService.update(updateShop);
    return res;
  }
  @Post('/remove')
  async removeShop(@Body() info: { id: number }) {
    if (!info.id) {
      throw new HttpException('缺少必填字段id', HttpStatus.BAD_REQUEST);
    }
    const res = await this.shopService.remove(info.id);
    return res;
  }
}
