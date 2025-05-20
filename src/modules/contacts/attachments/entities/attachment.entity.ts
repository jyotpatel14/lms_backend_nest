import { DefaultEntity } from 'src/entities/defaultEntity';
import { Contact } from 'src/modules/contacts/entities/contact.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_attachments')
export class Attachment extends DefaultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Contact, (ec) => ec.attachments)
  @JoinColumn({ name: 'event_contact_id' })
  contact: Contact;

  @Column()
  file_name: string;

  @Column()
  original_file_path: string;

  @Column()
  file_path: string;

  @Column()
  file_url: string;
}
