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
import { CarService } from './car.service';
import { CarDto } from './dot/car.dot';
@Controller('car')
export class CarController {
  constructor(
    private readonly carService: CarService,
    private readonly httpService: HttpService,
  ) {}
  @Get('/list')
  async findAll() {
    const res = await this.carService.findAll();
    return res;
  }
  @Get('/findUserCar')
  async findUserCar(@Query() query: any) {
    console.log(query.userId);
    const res = await this.carService.findUser(query.userId);
    return res;
  }
  @Post('/create')
  async createCar(@Body() createCar: CarDto) {
    const { userId } = createCar;
    if (!userId) {
      throw new HttpException('缺少必填字段userId', HttpStatus.BAD_REQUEST);
    }
    const res = await this.carService.create(createCar);
    return res;
  }
  @Post('/update')
  async updateCar(@Body() updateCar: CarDto) {
    const { userId } = updateCar;
    if (!userId) {
      throw new HttpException('缺少必填字段userId', HttpStatus.BAD_REQUEST);
    }
    const res = await this.carService.update(updateCar);
    return res;
  }
}
