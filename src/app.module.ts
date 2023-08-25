import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeLogsModule } from './time-logs.module'; // Vérifiez le chemin

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Configuration de la base de données
    }),
    TimeLogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
