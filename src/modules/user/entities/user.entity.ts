import { DefaultEntity } from 'src/entities/defaultEntity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('tbl_users')
export class User extends DefaultEntity {
  @PrimaryColumn({
    length: 36,
  })
  id: string;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;
}
