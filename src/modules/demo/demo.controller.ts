import {
  Controller,
  Get,
  Req,
  Post,
  Body,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateDemoDto } from './dot/demo.dot';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Demo } from './entities/demo.entities';

@Controller('demo')
export class DemoController {
  constructor(
    @InjectRepository(Demo)
    private usersRepository: Repository<Demo>,
  ) {}
  @Get('/icc')
  findAll(@Req() request: Request): string {
    console.log(request.query);
    return 'This action returns all cats';
  }
  @Post('/mypost')
  async create(@Body() createCatDto: CreateDemoDto) {
    console.log('[createCatDto]:', createCatDto);
    // 这里获取数据
    const temp = await this.usersRepository.query('SELECT * FROM demo');
    console.log('[我是数据库中的内容]：', temp);
    if (!createCatDto.value) {
      throw new HttpException('我报错了啊啊啊', HttpStatus.BAD_REQUEST);
    }
    return '我成功了哈';
  }
}
