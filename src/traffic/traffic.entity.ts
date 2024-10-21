// src/traffic/traffic.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trafficdata')
export class TrafficData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  day_of_data: number;

  @Column({ nullable: true })
  day_of_week: number;

  @Column({ nullable: true })
  lane_of_travel: number;

  @Column({ nullable: true })
  direction_of_travel: number;

  @Column({ nullable: true })
  month_of_data: number;

  @Column({ nullable: true })
  station_id: number;

  @Column({ nullable: true })
  traffic_1_to_4: number;

  @Column({ nullable: true })
  traffic_5_to_8: number;

  @Column({ nullable: true })
  traffic_9_to_12: number;

  @Column({ nullable: true })
  traffic_13_to_16: number;

  @Column({ nullable: true })
  traffic_17_to_20: number;

  @Column({ nullable: true })
  traffic_21_to_24: number;

  @Column('double precision', { nullable: true })
  predicted_1_to_4: number;

  @Column('double precision', { nullable: true })
  predicted_5_to_8: number;

  @Column('double precision', { nullable: true })
  predicted_9_to_12: number;

  @Column('double precision', { nullable: true })
  predicted_13_to_16: number;

  @Column('double precision', { nullable: true })
  predicted_17_to_20: number;

  @Column('double precision', { nullable: true })
  predicted_21_to_24: number;

  @Column('double precision', { nullable: true })
  predicted_total_traffic: number;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;
}
