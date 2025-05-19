import { DefaultEntity } from 'src/entities/defaultEntity';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('tbl_events')
export class Event extends DefaultEntity {
  @PrimaryColumn({
    length: 36,
  })
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
