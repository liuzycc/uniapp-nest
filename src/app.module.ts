import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DemoController } from './modules/demo/demo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './config';
import { Demo } from './modules/demo/entities/demo.entities';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(env.DATABASE_CONFIG),
    TypeOrmModule.forFeature([Demo]),
    UsersModule,
  ],
  controllers: [AppController, CatsController, DemoController],
  providers: [AppService],
})
export class AppModule {}
