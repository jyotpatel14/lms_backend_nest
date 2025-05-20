import { DefaultEntity } from 'src/entities/defaultEntity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_events')
export class Event extends DefaultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'timestamp',
  })
  start_date_time: Date;

  @Column({
    type: 'timestamp',
  })
  end_date_time: Date;

  //check
  @Column()
  location: string;

  @Column()
  event_url: string;

  //invitees
}
