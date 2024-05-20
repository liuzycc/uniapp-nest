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
  async removeSort(@Body() info: { idList: number[] }) {
    if (!info.idList.length) {
      throw new HttpException('缺少必填字段id', HttpStatus.BAD_REQUEST);
    }
    try {
      for (let i = 0; i < info.idList.length; i++) {
        const id = info.idList[i];
        await this.sortService.remove(id);
      }
      return '删除成功';
    } catch {
      throw new HttpException('删除分类异常', HttpStatus.BAD_REQUEST);
    }
  }
}
