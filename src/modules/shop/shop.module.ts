import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';
@Module({
  imports: [TypeOrmModule.forFeature([Shop]), HttpModule],
  controllers: [ShopController],
  providers: [ShopService],
})
export class ShopModule {}
