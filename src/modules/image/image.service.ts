import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import { ImageDto } from './dot/image.dot';
@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}
  // 查询所有
  findAll() {
    return this.imageRepository.find();
  }
  // 创建
  async create(imageInfo: ImageDto) {
    try {
      const res = await this.imageRepository.save(imageInfo);
      return res;
    } catch (e) {
      throw new HttpException(`创建失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
  // 软删除
  async remove(name: string) {
    try {
      const res = await this.imageRepository.update({ name }, { isDelete: 1 });
      return res;
    } catch (e) {
      throw new HttpException(`更新失败：${e}`, HttpStatus.BAD_REQUEST);
    }
  }
}
