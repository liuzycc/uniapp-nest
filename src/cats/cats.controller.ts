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
import { CreateCatDto } from './cats.dto';

@Controller('cats')
export class CatsController {
  @Get('/icc')
  findAll(@Req() request: Request): string {
    console.log(request.query);
    return 'This action returns all cats';
  }
  @Post('/mypost')
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('[createCatDto]:', createCatDto);
    if (!createCatDto.age) {
      throw new HttpException('我报错了啊啊啊', HttpStatus.BAD_REQUEST);
    }
    return 'This action adds a new cat';
  }
}
