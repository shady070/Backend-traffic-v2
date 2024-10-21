// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrafficData } from './traffic/traffic.entity';
import { TrafficService } from './traffic/traffic.service';
import { TrafficController } from './traffic/traffic.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'traffic_user',
      password: 'password', // Replace with your actual password
      database: 'traffic_data',
      entities: [TrafficData],
      synchronize: true, // Ensure this is off in production
    }),
    TypeOrmModule.forFeature([TrafficData]), // Add this line to register the entity
  ],
  controllers: [TrafficController], // Register your TrafficController
  providers: [TrafficService], // Register your TrafficService
})
export class AppModule {}
