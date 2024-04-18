import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { WxConfig } from './entities/wxconfig.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
@Module({
  imports: [TypeOrmModule.forFeature([Users, WxConfig]), HttpModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
