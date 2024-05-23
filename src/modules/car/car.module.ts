import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { CarController } from './car.controller';
import { CarService } from './car.service';
@Module({
  imports: [TypeOrmModule.forFeature([Car]), HttpModule],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
