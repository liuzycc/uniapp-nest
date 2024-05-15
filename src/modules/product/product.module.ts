import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
@Module({
  imports: [TypeOrmModule.forFeature([Product]), HttpModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
