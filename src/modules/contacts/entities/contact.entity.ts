import { DefaultEntity } from 'src/entities/defaultEntity';
import { Event } from 'src/modules/events/entities/event.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity('tbl_contacts')
export class Attachment extends DefaultEntity {
  @PrimaryColumn({
    length: 36,
  })
  id: string;

  @Column()
  user_first_name: string;

  @Column()
  user_last_name: string;

  @Column()
  designation: string;

  @Column()
  company_id: string;

  @Column()
  company_name: string;

  @Column()
  contact_number: string;

  @Column()
  email: string;

  @Column()
  linked_in_url: string;

  @Column({
    type: 'timestamp',
  })
  first_meeting: Date;

  //notes
  //attachments
  //events

  @ManyToMany(() => Event) // Many-to-many relation with the Event entity
  @JoinTable({
    // Create the join table with columns for both sides
    name: 'contact_events', // Name of the junction table (optional)
    joinColumn: {
      // This defines the join column for the "Contact" side
      name: 'contact_id', // The name of the column in the junction table
      referencedColumnName: 'id', // The column of the "Contact" table that this column will reference
    },
    inverseJoinColumn: {
      // This defines the join column for the "Event" side
      name: 'event_id', // The name of the column in the junction table
      referencedColumnName: 'id', // The column of the "Event" table that this column will reference
    },
  })
  events: Event[];
}
