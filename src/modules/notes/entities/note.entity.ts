import { DefaultEntity } from 'src/entities/defaultEntity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tbl_notes')
export class Note extends DefaultEntity {
  @PrimaryColumn({
    length: 36,
  })
  id: string;

  @Column()
  note: string;
}
