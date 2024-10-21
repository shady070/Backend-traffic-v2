// src/traffic/traffic.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrafficData } from './traffic.entity';

@Injectable()
export class TrafficService {
  constructor(
    @InjectRepository(TrafficData)
    private trafficRepository: Repository<TrafficData>,
  ) {}

  findAll(): Promise<TrafficData[]> {
    return this.trafficRepository.find();
  }

  findOne(id: number): Promise<TrafficData> {
    return this.trafficRepository.findOneBy({ id });
  }

  create(trafficData: TrafficData): Promise<TrafficData> {
    return this.trafficRepository.save(trafficData);
  }
}
