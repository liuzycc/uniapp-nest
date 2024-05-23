import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'; // 引入 Node.js 内置的path模块
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DemoController } from './modules/demo/demo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './config';
import { Demo } from './modules/demo/entities/demo.entities';
import { UsersModule } from './modules/users/users.module';
import { ProductModule } from './modules/product/product.module';
import { SortModule } from './modules/sort/sort.module';
import { ShopModule } from './modules/shop/shop.module';
import { ImageModule } from './modules/image/image.module';
import { CarModule } from './modules/car/car.module';
@Module({
  imports: [
    // 静态服务
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '../uploadImageList'), // 图片文件存储目录
    }),
    // 数据库
    TypeOrmModule.forRoot(env.DATABASE_CONFIG),
    TypeOrmModule.forFeature([Demo]),
    UsersModule,
    ProductModule,
    SortModule,
    ShopModule,
    ImageModule,
    CarModule,
  ],
  controllers: [AppController, CatsController, DemoController],
  providers: [AppService],
})
export class AppModule {}
