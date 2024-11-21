import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sportsComplexes' })
export class SportsComplexEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'location', length: 100, nullable: false })
  location: string;

  @Column({ name: 'pricePerHour', nullable: false })
  pricePerHour: number;
}
