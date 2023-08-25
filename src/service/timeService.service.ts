// src/time-logs/time-logs.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TimeLog } from '../entity/time.entity';

@Injectable()
export class TimeLogsService {
    constructor(
        @InjectRepository(TimeLog)
        private readonly timeLogRepository: Repository<TimeLog>,
    ) {}

    async create(startTime: string, endTime: string, period: number): Promise<TimeLog> {
        const timeLog = this.timeLogRepository.create({ startTime, endTime, period });
        return this.timeLogRepository.save(timeLog);
    }

    async findAll(): Promise<TimeLog[]> {
        return this.timeLogRepository.find();
    }
}
