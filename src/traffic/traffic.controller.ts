// src/traffic/traffic.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { TrafficService } from './traffic.service';
import { TrafficData } from './traffic.entity';

@Controller('traffic')
export class TrafficController {
  constructor(private readonly trafficService: TrafficService) {}

  @Get()
  async getAllTrafficData(): Promise<TrafficData[]> {
    return this.trafficService.findAll();
  }

  @Get(':id')
  async getTrafficData(@Param('id') id: number): Promise<TrafficData> {
    return this.trafficService.findOne(id);
  }
}
