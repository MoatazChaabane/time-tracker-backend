// src/time-logs/time-logs.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeLog } from './entity/time.entity';
import { TimeLogsController } from './Controller/time.controller';
import { TimeLogsService } from './service/timeService.service';

@Module({
    imports: [TypeOrmModule.forFeature([TimeLog])],
    controllers: [TimeLogsController],
    providers: [TimeLogsService],
})
export class TimeLogsModule {}
