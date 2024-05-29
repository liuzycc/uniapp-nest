import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './entities/home.entity';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
@Module({
  imports: [TypeOrmModule.forFeature([Home]), HttpModule],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
