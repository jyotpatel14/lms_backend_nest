import { DefaultEntity } from 'src/entities/defaultEntity';
import { Brochure } from 'src/modules/brochures/entities/brochure.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity('tbl_companies')
export class Company extends DefaultEntity {
  @PrimaryColumn({
    length: 36,
  })
  id: string;

  @Column()
  name: string;

  @Column()
  company_linked_id_url: string;
}
