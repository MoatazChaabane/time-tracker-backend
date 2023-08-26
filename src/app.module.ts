import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from "./entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
       entities,
      synchronize: true,
    }),
  ],
})
export class AppModule {}