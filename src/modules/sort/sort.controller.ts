import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { SortService } from './sort.service';
import { SortDto } from './dot/sort.dot';
@Controller('sort')
export class SortController {
  constructor(
    private readonly sortService: SortService,
    private readonly httpService: HttpService,
  ) {}
  @Get('/list')
  async findAll() {
    const res = await this.sortService.findAll();
    return res;
  }
  @Post('/create')
  async createSort(@Body() createSort: SortDto) {
    const { title } = createSort;
    if (!title) {
      throw new HttpException('缺少必填字段title', HttpStatus.BAD_REQUEST);
    }
    const res = await this.sortService.create(createSort);
    return res;
  }
  @Post('/update')
  async updateSort(@Body() updateSort: SortDto) {
    const { id } = updateSort;
    if (!id) {
      throw new HttpException('缺少必填字段id', HttpStatus.BAD_REQUEST);
    }
    const res = await this.sortService.update(updateSort);
    return res;
  }
  @Post('/remove')
  async removeSort(@Body() info: { id: number }) {
    if (!info.id) {
      throw new HttpException('缺少必填字段id', HttpStatus.BAD_REQUEST);
    }
    const res = await this.sortService.remove(info.id);
    return res;
  }
}
