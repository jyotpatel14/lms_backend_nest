import { DefaultEntity } from 'src/entities/defaultEntity';
import { Contact } from 'src/modules/contacts/entities/contact.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_notes')
export class Note extends DefaultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Contact, (ec) => ec.notes)
  @JoinColumn({ name: 'event_contact_id' })
  contact: Contact;

  @Column()
  note_text: string;
}
