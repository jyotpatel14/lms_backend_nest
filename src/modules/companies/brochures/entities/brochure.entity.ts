import { DefaultEntity } from 'src/entities/defaultEntity';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_brochures')
export class Brochure extends DefaultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column()
  // name: string;

  @Column()
  brochure_url: string;
}
