import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfig } from './Common/TypeOrm/typeorm.config';
import { UserModule } from './Modules/user/user.module';
import { User } from 'src/Entities/user.entity';
import { VaccineNameModule } from './Modules/vaccine-name/vaccine-name.module';
import { VaccineNames } from './Entities/vaccine.name.entity';
import { VaccineDataModule } from './Modules/vaccine-data/vaccine-data.module';
import { VaccineData } from './Entities/vaccine.data.entity';
import { LoggerMiddleware } from './Common/MiddleWare/logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: TypeOrmConfig.host,
      port: TypeOrmConfig.port,
      username: TypeOrmConfig.username,
      password: TypeOrmConfig.password,
      database: TypeOrmConfig.database,
      entities: [User, VaccineNames, VaccineData],
      synchronize: false
    }),
    UserModule,
    VaccineNameModule,
    VaccineDataModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
