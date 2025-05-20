import { DefaultEntity } from 'src/entities/defaultEntity';
import { Event } from 'src/modules/events/entities/event.entity';
import { Note } from 'src/modules/contacts/notes/entities/note.entity';
import { Attachment } from 'src/modules/contacts/attachments/entities/attachment.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_contacts')
export class Contact extends DefaultEntity {
  @PrimaryGeneratedColumn('uuid')
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
    name: 'tbl_contact_events', // Name of the junction table (optional)
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

  @OneToMany(() => Note, (note) => note.contact)
  notes: Event[];

  @OneToMany(() => Attachment, (attachment) => attachment.contact)
  attachments: Attachment[];
}
