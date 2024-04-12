import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DemoController } from './modules/demo/demo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './config';
import { Demo } from './modules/demo/entities/demo.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot(env.DATABASE_CONFIG),
    TypeOrmModule.forFeature([Demo]),
  ],
  controllers: [AppController, CatsController, DemoController],
  providers: [AppService],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { APP_PIPE } from '@nestjs/core';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ValidationPipe } from './common/pipe/validate.pipe';
// import { UsersModule } from './modules/users/users.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { env } from './common/config';
// @Module({
//   imports: [TypeOrmModule.forRoot(env.DATABASE_CONFIG), UsersModule],
//   controllers: [AppController],
//   providers: [
//     AppService,
//     {
//       provide: APP_PIPE,
//       useClass: ValidationPipe,
//     },
//   ],
// })
// export class AppModule {}
