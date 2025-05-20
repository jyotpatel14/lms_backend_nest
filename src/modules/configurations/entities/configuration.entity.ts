import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('tbl_configurations')
@Unique(['conf_key', 'conf_value'])
export class Configuration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  conf_key: string;

  @Column()
  conf_value: number;

  @Column()
  display_text: string;

  @Column()
  description: string;

  @Column()
  display_order: number;
}
