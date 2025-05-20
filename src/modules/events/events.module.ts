import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { CollaboratorService } from './collaborator/collaborator.service';

@Module({
  controllers: [EventsController],
  providers: [EventsService, CollaboratorService],
})
export class EventsModule {}
