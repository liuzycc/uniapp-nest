import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { multerOptions } from './image.multer.config';
import { Image } from './entities/image.entity';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([Image]),
    HttpModule,
    MulterModule.register(multerOptions),
  ],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
