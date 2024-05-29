import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { HomeService } from './home.service';
import { HomeDto } from './dot/home.dot';
@Controller('home')
export class HomeController {
  constructor(
    private readonly homeService: HomeService,
    private readonly httpService: HttpService,
  ) {}
  @Get('/list')
  async findAll() {
    const res = await this.homeService.findAll();
    return res;
  }
  @Post('/create')
  async createHome(@Body() createHome: HomeDto) {
    const res = await this.homeService.create(createHome);
    return res;
  }
  @Post('/update')
  async updateHome(@Body() updateHome: HomeDto) {
    const { id } = updateHome;
    if (!id) {
      throw new HttpException('缺少必填字段id', HttpStatus.BAD_REQUEST);
    }
    const res = await this.homeService.update(updateHome);
    return res;
  }
}
