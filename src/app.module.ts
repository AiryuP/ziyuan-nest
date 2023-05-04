import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '39.105.49.87',
      port: 3306,
      username: 'root',
      password: 'root',
      database: '',
      retryDelay: 500,
      retryAttempts: 10
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
