import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovementController } from './movement/controller/movement.controller';
import { MovementModule } from './movement/movement.module';
import { BaseRepository } from './base/repository/base.repository';

require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      ssl: {
        rejectUnauthorized: process.env.NODE_ENV === 'production' ? true : false,
      },
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true' ? true : false,
      logging: process.env.DATABASE_LOGGING === 'true' ? true : false,
      retryAttempts: 2,
      retryDelay: 2000
    }),
    MovementModule
  ],
  providers: [BaseRepository],
})
export class AppModule {}
