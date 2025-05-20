import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Event } from '../../entities/event.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Entity({ name: 'event_collaborators' })
export class Collaborator {
  @PrimaryColumn({ name: 'event_id', type: 'char', length: 36 })
  eventId: string;

  @PrimaryColumn({ name: 'user_id', type: 'char', length: 36 })
  userId: string;

  //   @ManyToOne(() => Event, (e) => e.collaborators, {
  //     primary: true,
  //     onDelete: 'CASCADE',
  //   })
  //   @JoinColumn({ name: 'event_id' })
  //   event: Event;

  //   @ManyToOne(() => User, (u) => u.collaborations, {
  //     primary: true,
  //     onDelete: 'CASCADE',
  //   })
  //   @JoinColumn({ name: 'user_id' })
  //   user: User;

  //   @ManyToOne(() => User, { onDelete: 'SET NULL' })
  //   @JoinColumn({ name: 'invited_by' })
  //   invitedBy: User;

  //   @Column({ name: 'invited_by', type: 'char', length: 36 })
  //   invitedById: string;

  //   @CreateDateColumn({ name: 'invited_at' })
  //   invitedAt: Date;
}
