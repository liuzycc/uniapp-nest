import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ProductService } from './product.service';
import { ProductDto } from './dot/product.dot';
@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly httpService: HttpService,
  ) {}
  @Get('/list')
  async findAll() {
    const res = await this.productService.findAll();
    return res;
  }
  @Post('/create')
  async createProduct(@Body() createProduct: ProductDto) {
    const { title } = createProduct;
    if (!title) {
      throw new HttpException('缺少必填字段title', HttpStatus.BAD_REQUEST);
    }
    const res = await this.productService.create(createProduct);
    return res;
  }
  @Post('/update')
  async updateProduct(@Body() updateProduct: ProductDto) {
    const { id } = updateProduct;
    if (!id) {
      throw new HttpException('缺少必填字段id', HttpStatus.BAD_REQUEST);
    }
    const res = await this.productService.update(updateProduct);
    return res;
  }
  @Post('/remove')
  async removeProduct(@Body() info: { id: number }) {
    if (!info.id) {
      throw new HttpException('缺少必填字段id', HttpStatus.BAD_REQUEST);
    }
    const res = await this.productService.remove(info.id);
    return res;
  }
}
