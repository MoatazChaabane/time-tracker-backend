// src/time-logs/time-logs.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TimeLogsService } from '../service/timeService.service';

@Controller('time-logs')
export class TimeLogsController {
    constructor(private readonly timeLogsService: TimeLogsService) {}

    @Get()
    async getAllTimeLogs() {
        return this.timeLogsService.findAll();
    }

    @Post()
    async createNewTimeLog(@Body() data: { startTime: string, endTime: string, period: number }) {
        return this.timeLogsService.create(data.startTime, data.endTime, data.period);
    }
}
