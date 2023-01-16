import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbEnvConfig from 'src/core/db.config';
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dbEnvConfig],
    }),
    // TODO: move out + use `dbConfig`
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres://znboslck:4XVA182ICd8jENXeNMuXc1JvTKyRA5oQ@rogue.db.elephantsql.com/znboslck',
      // port: dbConfig.port,
      username: 'znboslck',
      password: '4XVA182ICd8jENXeNMuXc1JvTKyRA5oQ',
      database: 'znboslck',
      entities: ['src/modules/users/user.entity'],
      logging: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
