import { DefaultEntity } from 'src/entities/defaultEntity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tbl_attachments')
export class Attachment extends DefaultEntity {
  @PrimaryColumn({
    length: 36,
  })
  id: string;

  @Column()
  original_file_name: string;

  @Column()
  file_path: string;

  @Column()
  url: string;
}
