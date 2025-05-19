import { DefaultEntity } from 'src/entities/defaultEntity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tbl_brochures')
export class Brochure extends DefaultEntity {
  @PrimaryColumn({
    length: 36,
  })
  id: string;

  @Column()
  name: string;

  @Column()
  brochure_url: string;
}
