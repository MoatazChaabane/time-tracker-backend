import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeLog } from './entity/time.entity'; // Assurez-vous que le chemin est correct
import { TimeLogsController } from './Controller/time.controller'; // Assurez-vous que le chemin est correct
import { TimeLogsService } from './service/timeService.service'; // Assurez-vous que le chemin est correct

@Module({
    imports: [TypeOrmModule.forFeature([TimeLog])], // Inclut l'entité TimeLog dans ce module
    controllers: [TimeLogsController], // Contrôleur pour gérer les requêtes liées aux enregistrements
    providers: [TimeLogsService], // Service pour gérer la logique métier
})
export class TimeLogsModule {}
