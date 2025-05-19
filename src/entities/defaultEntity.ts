import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

export abstract class DefaultEntity {
  //can set type to tz
  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @Column()
  created_by: string;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;

  @Column()
  updated_by: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  deleted_at: Date;

  @Column({
    nullable: true,
  })
  deleted_by: string;

  @Column({
    default: 1,
    nullable: false,
  })
  is_active: number;
}
