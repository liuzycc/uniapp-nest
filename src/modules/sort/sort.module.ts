import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sort } from './entities/sort.entity';
import { SortController } from './sort.controller';
import { SortService } from './sort.service';
@Module({
  imports: [TypeOrmModule.forFeature([Sort]), HttpModule],
  controllers: [SortController],
  providers: [SortService],
})
export class SortModule {}
