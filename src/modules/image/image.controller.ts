import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { HttpService } from '@nestjs/axios';

import { ImageService } from './image.service';
import { ImageDto } from './dot/image.dot';
@Controller('image')
export class ImageController {
  constructor(
    private readonly imageService: ImageService,
    private readonly httpService: HttpService,
  ) {}
  @Get('/list')
  async findAll() {
    const res = await this.imageService.findAll();
    return res;
  }
  @Post('/create')
  async createProduct(@Body() createProduct: ImageDto) {
    const { path, url } = createProduct;
    if (!path || !url) {
      throw new HttpException('缺少必填字段', HttpStatus.BAD_REQUEST);
    }
    const res = await this.imageService.create(createProduct);
    return res;
  }
  @Post('/remove')
  async removeImage(@Body() info: { name: string }) {
    if (!info.name) {
      throw new HttpException('缺少必填字段name', HttpStatus.BAD_REQUEST);
    }
    const res = await this.imageService.remove(info.name);
    return res;
  }
  // 图片上传
  @Post('/upload')
  // 这里是做的上传逻辑
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: any) {
    console.log(file);
    const { filename: name, originalname: originName, path } = file;
    // 同步数据库
    await this.imageService.create({
      url: `/${name}`,
      name,
      originName,
      path,
      isDelete: 0,
    });
    return {
      name,
      url: `/${name}`,
    };
  }
}
