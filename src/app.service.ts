import { Injectable } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'yr-uniapp',
      // autoLoadEntities: true, // 使用这个配置自动导入entities
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
