import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealModule } from './deal/deal.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: '1234567890',
      database: 'dealroom',
      autoLoadEntities: true,
      synchronize: true,
    }),
    DealModule,
  ],
})
export class AppModule {}
