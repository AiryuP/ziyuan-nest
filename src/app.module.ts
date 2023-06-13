import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CodeModule } from './code/code.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '39.105.187.92',
      port: 3306,
      username: 'root',
      password: 'py1994',
      database: 'ziyuan',
      retryDelay: 500,
      retryAttempts: 10,
      synchronize: true,
      autoLoadEntities: true,
    }),
    CodeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
