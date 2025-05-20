import { Exclude } from 'class-transformer';
import { DefaultEntity } from 'src/entities/defaultEntity';
import { Brochure } from 'src/modules/companies/brochures/entities/brochure.entity';
import { Company } from 'src/modules/companies/entities/company.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_users')
export class User extends DefaultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column()
  phone: string;

  @Column()
  name: string;

  @Column()
  linkedin_url: string;

  // @OneToOne(() => Company)
  // company: Company;

  @Column()
  company_name: string;

  @Column()
  company_linkedin_url: string;

  @ManyToMany(() => Brochure) // Many-to-many relation with the Event entity
  @JoinTable({
    // Create the join table with columns for both sides
    name: 'tbl_brochure_owners', // Name of the junction table (optional)
    joinColumn: {
      // This defines the join column for the "Contact" side
      name: 'owner_id', // The name of the column in the junction table
      referencedColumnName: 'id', // The column of the "Contact" table that this column will reference
    },
    inverseJoinColumn: {
      // This defines the join column for the "Event" side
      name: 'brochure_id', // The name of the column in the junction table
      referencedColumnName: 'id', // The column of the "Event" table that this column will reference
    },
  })
  brochures: Brochure[];

  @Exclude()
  @Column()
  password: string;
}
